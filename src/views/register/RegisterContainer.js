import React, { useState, useEffect } from 'react';
import RegisterPresenter from './RegisterPresenter';
import { userApi } from '../../api/api-user';

const RegisterContainer = ({ history }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [validIdLength, setValidIdLength] = useState(false);
    const [validIdExist, setValidIdExist] = useState(false);
    const [validPasswordLength, setValidPasswordLength] = useState(false);
    const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);

    //change Input
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    };

    //validation id, password
    const checkIdLength = () => {
        1 <= id.length && id.length <= 3 ? setValidIdLength(false) : setValidIdLength(true);
    };
    const checkPasswordLength = () => {
        1 <= password.length && password.length <= 7 ? setValidPasswordLength(false) : setValidPasswordLength(true);
    };

    const checkPasswordConfirm = () => {
        password === passwordConfirm ? setValidPasswordConfirm(true) : setValidPasswordConfirm(false);
    };

    const onSubmitRegister = async () => {
        const registerForm = {
            user_id: id,
            user_pw: password,
        };
        if (id !== '' && password !== '' && passwordConfirm !== '') {
            if (!(validIdLength && validIdExist && validPasswordLength && validPasswordConfirm)) {
                return;
            } else {
                let result = null;
                try {
                    result = await userApi.createUser(registerForm);
                } catch (e) {
                } finally {
                    if (result.status === 200) {
                        if (result.data === '') {
                            alert('?????????????????????');
                            setId('');
                            setPassword('');
                            setPasswordConfirm('');
                            return;
                        }
                        alert('??????????????? ?????????????????????');
                        history.push('/');
                    } else {
                        alert('????????? ???????????????.');
                        setId('');
                        setPassword('');
                        setPasswordConfirm('');
                        return;
                    }
                }
            }
        } else {
            alert('??? ?????? ?????? ??????????????? ????????????');
        }
    };

    //????????? ?????? ??????
    useEffect(() => {
        if (id === '') {
            setValidIdExist(true);
            setValidIdLength(true);
        }
        const IdExists = async () => {
            let result = null;
            try {
                result = await userApi.isExists(id);
            } catch (e) {
            } finally {
                if (!result) {
                    return;
                }
                result.data ? setValidIdExist(false) : setValidIdExist(true);
            }
        };

        checkIdLength();
        IdExists();
    }, [id]);
    // ???????????? 8?????? ??????
    useEffect(() => {
        checkPasswordLength();
    }, [password]);

    // ????????????, ???????????? ?????? ?????? ??????
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
            validIdExist={validIdExist}
            validIdLength={validIdLength}
            validPasswordLength={validPasswordLength}
            validPasswordConfirm={validPasswordConfirm}
            checkPasswordLength={checkPasswordLength}
            checkPasswordConfirm={checkPasswordConfirm}
            onSubmitRegister={onSubmitRegister}
        />
    );
};

export default RegisterContainer;
