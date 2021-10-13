import React from 'react';
import * as s from './MainStyled';
const MainPresenter = ({ ...props }) => {
    return (
        <s.Wrapper>
            <s.Container>
                <s.Logo>잠딧불</s.Logo>
                <s.LoginArea>
                    <s.InputArea type="text" placeholder="아이디" value={props.id} onChange={props.onChangeId} />
                    <s.InputArea type="password" placeholder="패스워드" value={props.password} onChange={props.onChangePassword} />
                </s.LoginArea>
                <s.LoginButton>로그인</s.LoginButton>
            </s.Container>
        </s.Wrapper>
    );
};

export default MainPresenter;
