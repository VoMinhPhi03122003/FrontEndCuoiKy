import {forEach} from "react-bootstrap/ElementChildren";
import {hashText} from "../utils/Utils_Tai";

export async function checkEmailExists(email) {
    try {
        const url = `http://localhost:9810/api/accounts?email=${encodeURIComponent(email)}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data.length > 0; // true nếu email tồn tại trong mảng accounts, false nếu không tồn tại
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function addAccount(account) {
    try {
        const url = 'http://localhost:9810/api/accounts';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data; // Trả về dữ liệu tài khoản đã được thêm
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function checkLogin(email, passwordEnter) {
    try {
        const url = `http://localhost:9810/api/accounts?email=${encodeURIComponent(email)}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const datas = await response.json();
        if (datas.length === 1) {
            const hashPass = hashText(passwordEnter);
            const passwordMatch = datas.some((item) => item.hashPass === hashPass);
            return passwordMatch;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}