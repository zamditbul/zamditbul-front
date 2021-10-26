import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import login from './views/login';
import register from './views/register';
import Sidebar from './components/Sidebar';
import * as s from './RouterDivision';
import setting from './views/setting';

export default ({}) => {
    return (
        <BrowserRouter>
            <s.RouterDivision>
                <Sidebar />
                <Route path="/setting" exact component={setting} />
                <Route path="/" exact component={login} />
                <Route path="/register" component={register} />
            </s.RouterDivision>
        </BrowserRouter>
    );
};
