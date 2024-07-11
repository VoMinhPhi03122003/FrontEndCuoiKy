import { SHA256 } from 'crypto-js';

export const isEmpty = (text) => {
    return !text || text.trim().length < 1;
}
export const isEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
};

export const hashText = (text) =>{
    const hash = SHA256(text).toString();
    return hash;
}