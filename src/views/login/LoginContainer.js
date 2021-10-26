import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    console.log(id);
    return <LoginPresenter id={id} password={password} onChangeId={onChangeId} onChangePassword={onChangePassword} />;
};

export default LoginContainer;
