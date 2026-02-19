'use client';

import { useState, useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';
import { ref, onValue, runTransaction } from 'firebase/database';

interface PollOption {
    id: string;
    label: string;
    votes: number;
}

interface PollData {
    question: string;
    options: PollOption[];
    totalVotes: number;
    pollVersion?: number;
}

export function FanPoll() {
    const [pollData, setPollData] = useState<PollData | null>(null);
    const [votedOption, setVotedOption] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [justUpdated, setJustUpdated] = useState(false);
    const prevDataRef = useRef<string>('');

    useEffect(() => {
        const pollRef = ref(db, 'poll');

        const unsubscribe = onValue(pollRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const options = data.options || [];
                const total = options.reduce((acc: number, curr: any) => acc + (curr.votes || 0), 0);

                // Detection for Visual Pulse
                const contentSignature = JSON.stringify({ q: data.question, o: options.map((o: any) => o.label) });
                if (prevDataRef.current && prevDataRef.current !== contentSignature) {
                    setJustUpdated(true);
                    setTimeout(() => setJustUpdated(false), 2000);
                }
                prevDataRef.current = contentSignature;

                // Handle Reset Logic
                // If the poll version from DB is newer/different than what we voted on, clear our vote
                const currentVersion = data.pollVersion || 0;
                const localVersion = parseInt(localStorage.getItem('poll_version') || '0');

                if (currentVersion !== localVersion) {
                    console.log("Poll reset detected. Clearing local vote.");
                    setVotedOption(null);
                    localStorage.removeItem('poll_voted_option');
                    localStorage.setItem('poll_version', currentVersion.toString());
                } else {
                    // Check persistent login if versions match
                    const storedVote = localStorage.getItem('poll_voted_option');
                    if (storedVote) {
                        setVotedOption(storedVote);
                    }
                }

                setPollData({
                    ...data,
                    totalVotes: total
                });
            } else {
                setPollData(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleVote = async (optionId: string) => {
        if (votedOption) return;

        if (!pollData || !pollData.options) return;

        const optionIndex = pollData.options.findIndex(o => o.id === optionId);
        if (optionIndex === -1) return;

        const optionRef = ref(db, `poll/options/${optionIndex}/votes`);

        try {
            await runTransaction(optionRef, (currentVotes) => {
                return (currentVotes || 0) + 1;
            });

            setVotedOption(optionId);
            localStorage.setItem('poll_voted_option', optionId);
            // Ensure version is set so we don't clear vote on reload
            if (pollData.pollVersion) {
                localStorage.setItem('poll_version', pollData.pollVersion.toString());
            }
        } catch (error) {
            console.error("Error casting vote:", error);
        }
    };

    if (loading) {
        return <div className="card p-4 border border-white/10 bg-[hsl(var(--background-elevated))] animate-pulse h-[200px]"></div>;
    }

    if (!pollData) return null;

    return (
        <div className={`card p-4 border transition-all duration-500 bg-[hsl(var(--background-elevated))] relative overflow-hidden ${justUpdated ? 'border-[hsl(var(--brand-red))] shadow-[0_0_20px_rgba(225,6,0,0.3)]' : 'border-white/10'}`}>
            {justUpdated && (
                <div className="absolute top-0 right-0 bg-[hsl(var(--brand-red))] text-white text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase animate-in slide-in-from-top-1">
                    Updated
                </div>
            )}

            <h3 className="font-bold mb-4 uppercase tracking-wide text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[hsl(var(--brand-red))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Fan Poll
            </h3>
            <div className="space-y-4">
                <p className="text-sm font-medium">{pollData.question}</p>
                <div className="space-y-2">
                    {pollData.options.map((option) => {
                        const percentage = pollData.totalVotes > 0
                            ? Math.round((option.votes / pollData.totalVotes) * 100)
                            : 0;

                        const isSelected = votedOption === option.id;
                        const showResults = !!votedOption;

                        return (
                            <button
                                key={option.id}
                                onClick={() => handleVote(option.id)}
                                disabled={!!votedOption}
                                className={`w-full relative h-10 rounded overflow-hidden transition-all text-sm group border
                                    ${isSelected
                                        ? 'border-[hsl(var(--brand-red))]' // Solid red border if selected
                                        : 'bg-[hsl(var(--background))] border-white/5 hover:border-[hsl(var(--brand-red))]/50'
                                    }
                                    ${!votedOption && 'hover:bg-[hsl(var(--brand-red))]/10'}
                                `}
                            >
                                {/* Progress Bar Background - Only show if user has voted */}
                                {showResults && (
                                    <div
                                        className={`absolute inset-y-0 left-0 transition-all duration-1000 ease-out flex items-center
                                            ${isSelected ? 'bg-[hsl(var(--brand-red))]' : 'bg-white/10'}
                                        `}
                                        style={{ width: `${percentage}%` }}
                                    >
                                    </div>
                                )}

                                {/* Text Content Layer (Above Progress) */}
                                <div className="absolute inset-0 flex justify-between items-center px-3 relative z-10">
                                    <span className={`font-medium truncate mr-2 ${isSelected ? 'text-white' : 'text-foreground'}`}>
                                        {option.label}
                                    </span>

                                    {/* Percentage showing only if voted */}
                                    {showResults && (
                                        <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-foreground-muted'}`}>
                                            {percentage}%
                                        </span>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
                {votedOption && (
                    <p className="text-xs text-center text-foreground-muted animate-in fade-in slide-in-from-top-2">
                        Thanks for voting!
                    </p>
                )}
            </div>
        </div>
    );
}
