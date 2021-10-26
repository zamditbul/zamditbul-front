import React from 'react';
import * as s from './MainStyled';
import { Link } from 'react-router-dom';
const MainPresenter = ({ ...props }) => {
    return (
        <s.Wrapper>
            <s.Container>
                <s.Logo>잠딧불</s.Logo>
                <s.LoginArea>
                    <s.InputArea type="text" placeholder="아이디" value={props.id} onChange={props.onChangeId} />
                    <s.InputArea type="password" placeholder="패스워드" value={props.password} onChange={props.onChangePassword} />
                </s.LoginArea>
                <s.LoginButton>LOGIN</s.LoginButton>
                <s.RegisterArea>
                    <s.RegisterQuestion>계정이 없으신가요?</s.RegisterQuestion>
                    <Link to="/register">
                        <s.ToRegister>회원가입</s.ToRegister>
                    </Link>
                </s.RegisterArea>
            </s.Container>
        </s.Wrapper>
    );
};

export default MainPresenter;
