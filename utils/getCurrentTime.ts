export const getCurrentTime = () => {
    return new Date()
        .toLocaleTimeString('de-DE', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        .replace(/\D/g, '')
        .split('')
        .map(Number);
};
