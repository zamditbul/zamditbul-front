import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 768px) {
    }
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 50%;
    height: 50%;
    border: 1.5px solid gray;
    border-radius: 10px;
    border-color: #008200;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Logo = styled.div`
    font-size: 150%;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    padding-top: 10px;
`;

export const LoginArea = styled.div`
    flex: 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.input`
    width: 50%;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #f6fced;
    border: none;
    color: #587558;
    outline: none;
`;

export const LoginButton = styled.button`
    flex: 1;
    width: 50%;
    background-color: #008200;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 20px;
    border: none;
    cursor: pointer;
`;
