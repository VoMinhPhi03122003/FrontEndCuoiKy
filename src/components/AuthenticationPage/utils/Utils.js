export const isEmpty = (text) => {
    return !text || text.trim().length < 1;
}
export const isEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
};