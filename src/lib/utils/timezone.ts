// Utility functions for time zone conversions and race scheduling

export interface TimeZoneDisplay {
    label: string;
    time: string;
    timezone: string;
}

export function convertToMultipleTimezones(
    dateString: string,
    timeString: string,
    sourceTimezone: string
): TimeZoneDisplay[] {
    try {
        // Parse the date and time
        const [year, month, day] = dateString.split('-').map(Number);
        const [hours, minutes] = timeString.split(':').map(Number);

        // Create date object in source timezone
        const dateTimeString = `${dateString}T${timeString}:00`;
        const sourceDate = new Date(dateTimeString);

        // Convert to target timezones
        const timezones = [
            { label: 'IST (India)', timezone: 'Asia/Kolkata' },
            { label: 'UK', timezone: 'Europe/London' },
            { label: 'US (ET)', timezone: 'America/New_York' },
            { label: 'US (PT)', timezone: 'America/Los_Angeles' },
        ];

        return timezones.map(tz => ({
            label: tz.label,
            timezone: tz.timezone,
            time: sourceDate.toLocaleString('en-US', {
                timeZone: tz.timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }),
        }));
    } catch (error) {
        console.error('Error converting timezones:', error);
        return [];
    }
}

export function getCountdownToSession(targetDate: Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
} {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
    }

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
        days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
        totalSeconds: seconds,
    };
}

export function formatCountdown(countdown: ReturnType<typeof getCountdownToSession>): string {
    const { days, hours, minutes, seconds } = countdown;

    if (days > 0) {
        return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    } else {
        return `${seconds}s`;
    }
}

export function getRaceStatus(weekendStart: string, weekendEnd: string): 'completed' | 'live' | 'upcoming' {
    const now = new Date();
    const start = new Date(weekendStart);
    const end = new Date(weekendEnd);

    if (now < start) return 'upcoming';
    if (now > end) return 'completed';
    return 'live';
}

export function getUserTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function formatLocalTime(dateString: string, timeString: string, sourceTimezone: string): string {
    try {
        const dateTimeString = `${dateString}T${timeString}:00`;
        const date = new Date(dateTimeString);
        const userTimezone = getUserTimezone();

        return date.toLocaleString('en-US', {
            timeZone: userTimezone,
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    } catch (error) {
        return `${dateString} ${timeString}`;
    }
}
