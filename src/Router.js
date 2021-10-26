import React from 'react';
import main from './views/main';
import register from './views/register';
import { BrowserRouter, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export default ({}) => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={main} />
            <Route path="/register" component={register} />
        </BrowserRouter>
    );
};
