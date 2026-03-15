'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';

export function GlobalNotification() {
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [notifTime, setNotifTime] = useState<number | null>(null);

    useEffect(() => {
        const notifRef = ref(db, 'poll/notification');
        const unsubscribe = onValue(notifRef, (snapshot) => {
            const data = snapshot.val();
            if (data && data.isActive) {
                const updatedAt = data.updatedAt || 0;
                setNotifTime(updatedAt);
                
                const dismissedTime = localStorage.getItem('dismissed_notif_time');
                if (dismissedTime && parseInt(dismissedTime) === updatedAt) {
                    setIsVisible(false);
                    return;
                }
                
                setMessage(data.message || '');
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isVisible && notifTime) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                localStorage.setItem('dismissed_notif_time', notifTime.toString());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, notifTime]);

    const handleClose = () => {
        setIsVisible(false);
        if (notifTime) {
            localStorage.setItem('dismissed_notif_time', notifTime.toString());
        }
    };

    if (!isVisible || !message) return null;

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-[hsl(var(--brand-red))] text-white px-4 py-3 shadow-lg flex justify-between items-center z-[60] animate-in slide-in-from-top-2 duration-300">
            <div className="flex-1 text-center font-f1 text-sm md:text-base pr-8">
                {message}
            </div>
            <button 
                onClick={handleClose}
                className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close notification"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

