import React, { useState } from 'react';
import SettingPresenter from './SettingPresenter';
import { useColor } from 'react-color-palette';

const SettingContainer = () => {
    const [color, setColor] = useColor('hex', '#ffffff');

    return <SettingPresenter color={color} setColor={setColor} />;
};

export default SettingContainer;
