'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { getVisitedHome, setVisitedHome } from '@/lib/navigationState';

/* ── Tuning ──────────────────────────────────────────────────── */
const MIN_MS  = 3000;   // always show for at least 3 s (ads need time)
const MAX_MS  = 6000;   // hard cap — never block longer than 6 s

const MESSAGES = [
    'Warming up the engines…',
    'Loading race telemetry…',
    'Syncing live timing…',
    'Preparing the pit lane…',
    'Lights out and away we go!',
];

/* ── Speed-line config ───────────────────────────────────────── */
const LINES = [
    { top: '18%', width: '55%', dur: '1.8s', delay: '0s',    opacity: 0.18 },
    { top: '32%', width: '80%', dur: '2.2s', delay: '0.4s',  opacity: 0.10 },
    { top: '45%', width: '40%', dur: '1.5s', delay: '0.9s',  opacity: 0.22 },
    { top: '58%', width: '65%', dur: '2.0s', delay: '0.2s',  opacity: 0.14 },
    { top: '72%', width: '50%', dur: '1.7s', delay: '0.7s',  opacity: 0.16 },
    { top: '85%', width: '70%', dur: '2.4s', delay: '0.5s',  opacity: 0.09 },
];

/* ── F1 start lights ─────────────────────────────────────────── */
function StartLights() {
    const [lit, setLit] = useState(0);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];
        // Light up 1 → 5 over ~2 s, then all off
        [400, 700, 1000, 1300, 1600].forEach((ms, i) => {
            timers.push(setTimeout(() => setLit(i + 1), ms));
        });
        timers.push(setTimeout(() => setLit(0), 2200)); // all off = race start!
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((n) => (
                <div
                    key={n}
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        border: '2px solid #3a0000',
                        background: lit >= n ? '#FF1E1E' : '#1a0000',
                        boxShadow: lit >= n
                            ? '0 0 14px 5px rgba(255,30,30,0.75)'
                            : 'none',
                        transition: 'background 0.15s, box-shadow 0.15s',
                    }}
                />
            ))}
        </div>
    );
}

/* ── Main component ──────────────────────────────────────────── */
export function Preloader() {
    const pathname     = usePathname();
    const searchParams = useSearchParams();
    const router       = useRouter();

    // Guard navigation to race/watch pages if they haven't visited the home page first
    useEffect(() => {
        if (pathname === '/') {
            setVisitedHome(true);
        } else if (pathname.startsWith('/race/') || pathname.startsWith('/watch/')) {
            if (!getVisitedHome()) {
                router.replace('/');
            }
        }
    }, [pathname, router]);

    const [phase,   setPhase]   = useState<'show' | 'fade' | 'gone'>('show');
    const [msgIdx,  setMsgIdx]  = useState(0);
    const dismissed             = useRef(false);

    /* Dismiss logic — respects MIN_MS and MAX_MS */
    const dismiss = (startTime: number) => {
        if (dismissed.current) return;
        dismissed.current = true;

        const elapsed   = Date.now() - startTime;
        const remaining = Math.max(0, MIN_MS - elapsed);

        setTimeout(() => {
            setPhase('fade');
            setTimeout(() => setPhase('gone'), 750);
        }, remaining);
    };

    /* Run on every route change */
    useEffect(() => {
        dismissed.current = false;
        setPhase('show');
        setMsgIdx(0);

        const start = Date.now();

        /* Hard-cap timeout */
        const hardTimer = setTimeout(() => dismiss(start), MAX_MS);

        /* On initial page load wait for window "load" (all assets) */
        const handleLoad = () => dismiss(start);
        if (document.readyState === 'complete') {
            dismiss(start);
        } else {
            window.addEventListener('load', handleLoad, { once: true });
        }

        return () => {
            clearTimeout(hardTimer);
            window.removeEventListener('load', handleLoad);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, searchParams]);

    /* Cycle loading messages */
    useEffect(() => {
        if (phase !== 'show') return;
        const t = setInterval(
            () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
            1100,
        );
        return () => clearInterval(t);
    }, [phase]);

    if (phase === 'gone') return null;

    return (
        <div
            className={phase === 'fade' ? 'gate-fade-out' : ''}
            style={{
                position:       'fixed',
                inset:          0,
                zIndex:         99999,
                background:     '#000',
                display:        'flex',
                flexDirection:  'column',
                alignItems:     'center',
                justifyContent: 'center',
                overflow:       'hidden',
                pointerEvents:  phase === 'fade' ? 'none' : 'auto',
            }}
        >
            {/* ── Radial red glow behind logo ── */}
            <div style={{
                position:   'absolute',
                inset:      0,
                background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,30,30,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* ── Speed lines ── */}
            {LINES.map((l, i) => (
                <div
                    key={i}
                    className="gate-speed-line"
                    style={{
                        top:              l.top,
                        right:            0,
                        width:            l.width,
                        background:       `linear-gradient(90deg, transparent 0%, rgba(255,30,30,${l.opacity}) 40%, rgba(255,255,255,${l.opacity * 0.6}) 60%, transparent 100%)`,
                        animationDuration: l.dur,
                        animationDelay:   l.delay,
                    }}
                />
            ))}

            {/* ── Animated checkered stripe (top) ── */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                backgroundImage: `repeating-linear-gradient(
                    90deg,
                    #fff 0px, #fff 10px,
                    #000 10px, #000 20px
                )`,
                backgroundSize: '40px 6px',
                animation: 'checkeredSlide 0.6s linear infinite',
                opacity: 0.35,
            }} />
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 6,
                backgroundImage: `repeating-linear-gradient(
                    90deg,
                    #fff 0px, #fff 10px,
                    #000 10px, #000 20px
                )`,
                backgroundSize: '40px 6px',
                animation: 'checkeredSlide 0.6s linear infinite reverse',
                opacity: 0.25,
            }} />

            {/* ── Content ── */}
            <div style={{ textAlign: 'center', zIndex: 1 }}>

                {/* F1 Start Lights */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <StartLights />
                </div>

                {/* Logo */}
                <div
                    className="gate-logo-glow"
                    style={{
                        fontFamily:    'var(--font-f1), sans-serif',
                        fontSize:      'clamp(2.2rem, 7vw, 5rem)',
                        fontWeight:    900,
                        letterSpacing: '0.15em',
                        color:         '#fff',
                        textTransform: 'uppercase',
                        lineHeight:    1,
                        marginBottom:  8,
                    }}
                >
                    SLIP<span style={{ color: '#FF1E1E' }}>STREAMS</span>
                </div>

                {/* Subtitle */}
                <div style={{
                    fontFamily:    'var(--font-f1), sans-serif',
                    fontSize:      'clamp(0.6rem, 2vw, 0.85rem)',
                    letterSpacing: '0.4em',
                    color:         'rgba(255,255,255,0.4)',
                    textTransform: 'uppercase',
                    marginBottom:  40,
                }}>
                    Live F1 Racing · 2026
                </div>

                {/* Progress bar track */}
                <div style={{
                    width:        'min(380px, 80vw)',
                    height:       3,
                    background:   'rgba(255,255,255,0.08)',
                    borderRadius: 99,
                    overflow:     'hidden',
                    margin:       '0 auto',
                    marginBottom: 16,
                }}>
                    <div
                        className="gate-progress-bar"
                        style={{
                            height:        '100%',
                            background:    'linear-gradient(90deg, #FF1E1E, #ff6b35)',
                            borderRadius:  99,
                            boxShadow:     '0 0 8px rgba(255,30,30,0.6)',
                            width:         '0%',
                        }}
                    />
                </div>

                {/* Cycling loading message */}
                <div
                    key={msgIdx}
                    className="gate-message"
                    style={{
                        fontFamily:    'var(--font-geist-sans), sans-serif',
                        fontSize:      'clamp(0.7rem, 2vw, 0.8rem)',
                        color:         'rgba(255,255,255,0.35)',
                        letterSpacing: '0.05em',
                        minHeight:     20,
                    }}
                >
                    {MESSAGES[msgIdx]}
                </div>
            </div>
        </div>
    );
}
