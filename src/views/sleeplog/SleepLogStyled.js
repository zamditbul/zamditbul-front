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
export const WrapperTopArea = styled.div`
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

export const Wrapper = styled.div`
    width: 80%;
    height: 80%;
    border: 1px solid #16a085;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TotalInfo = styled.div`
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const TotalInfoMenuItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self:center;
    justify-content: center;
`;

export const TotalInfoMenuText = styled.div`
    font-weight: bold;

`;

export const TotalInfoMenuBox = styled.div`
    background-color: #e2e2e2;
    margin-top: 20px;
    border-radius: 10px;
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SleepGraph = styled.div`
    flex: 4;
    height: 80%;

`;
