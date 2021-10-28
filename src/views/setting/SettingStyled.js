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
    height: 80%;
    border: 1px solid #16a085;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SettingItem = styled.div`
    flex: 2;
    width: 90%;
    border-bottom: 1px solid #16a085;
    display: flex;
    flex-direction: row;
`;

export const SettingItemSmall = styled.div`
    flex: 1;
    width: 90%;
    border-bottom: 1px solid #16a085;
    display: flex;
    flex-direction: row;
`;

export const SettingTitleArea = styled.div`
    flex: 1;
`;
export const SettingTitleText = styled.div`
    margin-top: 10px;
    padding: 10px 10px;
    background-color: #e2e2e2;
    border-radius: 5px;
`;

export const SettingContentArea = styled.div`
    flex: 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SettingContentAreaColumn = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TimeSelectArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ColorStatusBox = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
`;

export const ColorStatus = styled.button`
    width: 30%;
    height: 30%;
    background-color: ${(props) => props.selectedColor};
    &:hover {
        opacity: 0.8;
    }
    border: none;
`;

export const ColorPickerArea = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
`;

export const ColorPickerWithPadding = styled.div`
    padding: 10px 10px;
`;

export const ColorPickerApplyButton = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    height: 20px;
    margin-top: 10px;
    padding: 10px 10px;
    background-color: #e2e2e2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 70%;
    &:hover {
        opacity: 0.5;
        font-weight: bold;
    }
`;
