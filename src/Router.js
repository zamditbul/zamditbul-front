import React from 'react';
import main from './main';
import { BrowserRouter, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export default ({}) => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={main} />
        </BrowserRouter>
    );
};
