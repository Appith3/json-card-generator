export function formatDuration(duration_seconds: number): string {
    const hours = Math.floor(duration_seconds / 3600);
    const minutes = Math.floor((duration_seconds % 3600) / 60);
    const seconds = duration_seconds % 60;
    const parts = [];

    if (hours > 0) {
        parts.push(hours.toString());
    }
    parts.push(minutes.toString().padStart(2, '0'));
    parts.push(seconds.toString().padStart(2, '0'));
    return parts.join(':');
}