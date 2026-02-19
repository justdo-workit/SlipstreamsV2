'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { ref, set, onValue } from 'firebase/database';
import { signInWithEmailAndPassword, onAuthStateChanged, User, signOut } from 'firebase/auth';

export default function PollAdmin() {
    const [user, setUser] = useState<User | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([
        { id: 'opt1', label: '', votes: 0 }
    ]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!user) return; // Only fetch data if logged in

        const pollRef = ref(db, 'poll');
        onValue(pollRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setQuestion(data.question);
                setOptions(data.options || []);
            }
        });
    }, [user]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            setLoginError('Invalid credentials');
            console.error(err);
        }
    };

    const handleLogout = () => {
        signOut(auth);
    };

    const handleOptionChange = (idx: number, val: string) => {
        const newOptions = [...options];
        newOptions[idx].label = val;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([
            ...options,
            { id: `opt${Date.now()}`, label: '', votes: 0 }
        ]);
    };

    const handleRemoveOption = (idx: number) => {
        if (options.length <= 1) {
            alert("You must have at least one option.");
            return;
        }
        const newOptions = options.filter((_, i) => i !== idx);
        setOptions(newOptions);
    };

    const handleSave = async () => {
        if (!user) return;
        try {
            await set(ref(db, 'poll'), {
                question,
                options,
                pollVersion: Date.now() // Update version to force clients to refresh/re-evaluate
            });
            setStatus('Saved successfully!');
            setTimeout(() => setStatus(''), 2000);
        } catch (error) {
            setStatus('Error saving poll (Permission denied?)');
            console.error(error);
        }
    };

    const handleResetVotes = async () => {
        if (!user) return;
        if (!confirm('Are you sure you want to reset all votes to 0?')) return;

        const resetOptions = options.map(opt => ({ ...opt, votes: 0 }));
        try {
            await set(ref(db, 'poll'), {
                question,
                options: resetOptions,
                pollVersion: Date.now() // Force reset on clients
            });
            setStatus('Votes reset!');
            setTimeout(() => setStatus(''), 2000);

            // Also update local state to match
            setOptions(resetOptions);
        } catch (error) {
            setStatus('Error resetting votes');
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <div className="card p-8 max-w-md w-full border border-white/10">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 rounded bg-white/5 border border-white/10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 rounded bg-white/5 border border-white/10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
                        <button
                            type="submit"
                            className="w-full py-2 bg-[hsl(var(--brand-red))] hover:brightness-110 rounded text-white font-bold"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Poll Admin</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400">{user.email}</span>
                        <button onClick={handleLogout} className="text-sm text-[hsl(var(--brand-red))] hover:underline">
                            Logout
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Question</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-white/5 border border-white/10"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Options</label>
                        {options.map((opt, idx) => (
                            <div key={opt.id} className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    className="flex-1 p-2 rounded bg-white/5 border border-white/10"
                                    value={opt.label}
                                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                                    placeholder={`Option ${idx + 1}`}
                                />
                                <span className="p-2 w-16 text-center bg-white/5 rounded text-sm text-gray-400">
                                    {opt.votes} votes
                                </span>
                                <button
                                    onClick={() => handleRemoveOption(idx)}
                                    className="p-2 bg-red-600/20 hover:bg-red-600/40 text-red-500 rounded"
                                    title="Remove option"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleAddOption}
                        className="w-full py-2 border border-dashed border-white/20 rounded hover:bg-white/5 text-sm text-gray-400"
                    >
                        + Add Option
                    </button>

                    <div className="flex gap-4 pt-4 border-t border-white/10 mt-6">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
                        >
                            Update Poll
                        </button>
                        <button
                            onClick={handleResetVotes}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-medium ml-auto"
                        >
                            Reset Votes
                        </button>
                    </div>

                    {status && (
                        <p className={`text-sm ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
