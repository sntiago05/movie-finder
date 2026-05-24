export default function formatDate(dateString) {

    if (!dateString) return "";
    const [year, month, day] = dateString.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const monthName = dateObj.toLocaleString('en-US', { month: 'short' });
    return `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}