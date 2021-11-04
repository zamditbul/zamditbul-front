import React from 'react';
import jwt_decode from 'jwt-decode';

export const tokenCheck = (token) => {
    if (token === '' || token === null) {
        localStorage.clear();
        return false;
    }
    let decode = jwt_decode(token);
    let exp = decode.exp;
    let now = Date.now() / 1000;
    if (exp < now) {
        localStorage.clear();
        return false;
    } else {
        return true;
    }
};

export const logout = () => {
    localStorage.clear();
    alert('로그아웃 되었습니다');
    window.location.reload();
};
