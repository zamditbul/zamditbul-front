import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as recoilItem from './util/recoilItem';
import * as util from './util/util';

import login from './views/login';
import register from './views/register';
import Sidebar from './components/Sidebar';
import * as s from './RouterDivision';
import setting from './views/setting';
import sleeplog from './views/sleeplog';
import device from './views/device';

export default ({}) => {
    const token = useRecoilValue(recoilItem.token);

    return (
        <BrowserRouter>
            <s.RouterDivision>
                {util.tokenCheck(token) ? (
                    <>
                        <Sidebar />
                        <Route path="/" exact component={setting} />
                        <Route path="/sleeplog" exact component={sleeplog}/>
                        <Route path="/device" exact component={device}/>
                    </>
                ) : (
                    <>
                        <Route path="/" exact component={login} />
                        <Route path="/register" component={register} />
                    </>
                )}
            </s.RouterDivision>
        </BrowserRouter>
    );
};
