export function toHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    return `${hours}h : ${String(minutesLeft).padStart(2, '0')}m`;
}
