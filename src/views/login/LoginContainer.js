import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';
import { userApi } from '../../api/api-user';

const LoginContainer = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginValid, setLoginValid] = useState(true);

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmitLogin = () => {
        let loginForm = {
            user_id: id,
            user_pw: password,
        };
        let result = null;
        if (id === '' || password === '') {
            alert('빈 칸을 채워주시길 바랍니다.');
        } else {
            try {
                result = userApi.login(loginForm);
            } catch (e) {
            } finally {
                result.then((value) => {
                    if (value.data === 'OK') {
                        setLoginValid(true);
                        alert('로그인 성공');
                    } else {
                        setLoginValid(false);
                    }
                });
            }
        }
    };

    console.log(id);
    return (
        <LoginPresenter
            id={id}
            password={password}
            onChangeId={onChangeId}
            onChangePassword={onChangePassword}
            onSubmitLogin={onSubmitLogin}
            loginValid={loginValid}
        />
    );
};

export default LoginContainer;
