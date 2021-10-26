import styled from 'styled-components';

export const Container = styled.div`
    min-width: 200px;
    height: 100%;
    display: inline-block;
    background-color: #16a085;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 767px) {
        height: 100px;
        flex-direction: row;
        width: 100%;
    }
`;

export const Header = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: yellow;
    width: 100%;
    height: 100%;
`;
export const HeaderContent = styled.div`
    font-size: 30px;
`;

export const MenuArea = styled.div`
    flex: 7;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 767px) {
        flex-direction: row;
        flex: 4;
    }
`;
export const MenuItem = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
`;

export const Footer = styled.div`
    flex: 1;
    width: 100%;
    @media screen and (max-width: 767px) {
        flex: 0;
    }
`;
