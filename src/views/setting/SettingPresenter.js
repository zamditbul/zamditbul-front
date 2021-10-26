import React from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import * as s from './SettingStyled';

const SettingPresenter = ({ ...props }) => {
    return (
        <s.Container>
            <s.Wrapper>
                <s.ColorPickerArea>
                    <ColorPicker width={200} height={100} color={props.color} onChange={props.setColor} hideHSV hideRGB dark />
                </s.ColorPickerArea>
            </s.Wrapper>
        </s.Container>
    );
};

export default SettingPresenter;
