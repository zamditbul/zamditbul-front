import React, { useState, useEffect } from 'react';
import RegisterPresenter from './RegisterPresenter';

const RegisterContainer = () => {
    const [page, setPage] = useState('LOGIN');

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [idValid, setIdValid] = useState(true);
    const [validLength, setValidLength] = useState(false);
    const [validConfirm, setValidConfirm] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    };

    const checkIdLength = () => {
        1 <= id.length && id.length <= 3 ? setIdValid(false) : setIdValid(true);
    };
    const checkPasswordLength = () => {
        1 <= password.length && password.length <= 7 ? setValidLength(false) : setValidLength(true);
    };

    const checkPasswordConfirm = () => {
        password === passwordConfirm ? setValidConfirm(true) : setValidConfirm(false);
    };

    const onSubmitRegister = () => {
        if (id !== '' && password !== '' && passwordConfirm !== '') {
            idValid && validLength && validConfirm ? alert('확인') : alert('오류');
        }
    };
    useEffect(() => {
        checkPasswordLength();
    }, [password]);

    useEffect(() => {
        checkPasswordConfirm();
    }, [passwordConfirm]);
    return (
        <RegisterPresenter
            id={id}
            password={password}
            passwordConfirm={passwordConfirm}
            onChangeId={onChangeId}
            onChangePassword={onChangePassword}
            onChangePasswordConfirm={onChangePasswordConfirm}
            validLength={validLength}
            validConfirm={validConfirm}
            checkPasswordLength={checkPasswordLength}
            checkPasswordConfirm={checkPasswordConfirm}
            onSubmitRegister={onSubmitRegister}
        />
    );
};

export default RegisterContainer;
