import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 768px) {
    }
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    width: 80%;
    height: 80%;
    border: 1px solid #16a085;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Logo = styled.div`
    font-size: 200%;
    font-weight: bolder;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #16a085;
    padding-top: 30px;
`;

export const SerialForm = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const SerialInput = styled.input`
    border: 1px solid #16a085;
    background-color: '#e2e2e2';
    width: 50%;
    height: 30px;
    text-align: center;
    color: #16a085;
    ::placeholder {
        color: #16a085;
    }
    outline-color: #108069;
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export const SaveButton = styled.button`
    background-color: #16a085;

    color: white;
    border: none;
    cursor: pointer;
    width: 10%;
    height: 33px;
`;

export const SavedData = styled.h4`
    color: #108069;
`;