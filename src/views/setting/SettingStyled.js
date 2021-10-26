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
`;

export const Wrapper = styled.div`
    width: 80%;
    height: 70%;
    border: 1px solid #16a085;
    border-radius: 10px;
`;

export const ColorPickerArea = styled.div`
    width: 100px;
    height: 100px;
`;
