import React, { useState } from 'react';
import MainPresenter from './MainPresenter';

const MainContainer = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    console.log(id);
    return <MainPresenter id={id} password={password} onChangeId={onChangeId} onChangePassword={onChangePassword} />;
};

export default MainContainer;
