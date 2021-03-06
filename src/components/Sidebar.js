import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as s from './SidebarStyled';
import * as util from '../util/util';

const Sidebar = () => {
    return (
        <>
            <s.Container>
                <s.Header>
                    <s.HeaderContent>잠딧불</s.HeaderContent>
                </s.Header>
                <s.MenuArea>
                    <s.MenuItem to="/">기기 연결</s.MenuItem>
                    <s.MenuItem to="/setting">
                        수면 설정
                    </s.MenuItem>
                    <s.MenuItem to ="/sleeplog">수면 기록 </s.MenuItem>
                    <s.MenuItem onClick={() => util.logout()}>로그아웃</s.MenuItem>
                </s.MenuArea>
                <s.Footer />
            </s.Container>
        </>
    );
};

export default Sidebar;
