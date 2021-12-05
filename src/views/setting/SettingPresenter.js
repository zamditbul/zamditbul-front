import React from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import * as s from './SettingStyled';

const SettingPresenter = ({ ...props }) => {
    return (
        <s.Container>
            <s.WrapperTopArea>
                <s.ResetButton onClick={() => props.onClickResetButton()}>초기화</s.ResetButton>
                <s.SaveButton onClick={() => props.onClickSaveButton()}>저장</s.SaveButton>
            </s.WrapperTopArea>
            <s.Wrapper>
                <s.SettingItem>
                    <s.SettingTitleArea>
                        <s.SettingTitleText> 수면 색상</s.SettingTitleText>
                    </s.SettingTitleArea>
                    <s.SettingContentArea>
                        <s.ColorStatusBox>
                            <h4>선택된 색상: {props.selectedColor}</h4>

                            <s.ColorStatus
                                selectedColor={props.selectedColor}
                                onClick={() => props.setOpenColorPicker(!props.openColorPicker)}
                            ></s.ColorStatus>
                        </s.ColorStatusBox>

                        {props.openColorPicker ? (
                            <s.ColorPickerArea>
                                <s.ColorPickerWithPadding>
                                    <ColorPicker width={200} height={100} color={props.color} onChange={props.setColor} hideHSV hideRGB />
                                </s.ColorPickerWithPadding>
                                <s.ColorPickerApplyButton onClick={props.onClickColorApply}>확인</s.ColorPickerApplyButton>
                            </s.ColorPickerArea>
                        ) : null}
                    </s.SettingContentArea>
                </s.SettingItem>
                <s.SettingItem>
                    <s.SettingTitleArea>
                        <s.SettingTitleText> 수면 시간</s.SettingTitleText>
                    </s.SettingTitleArea>
                    <s.SettingContentAreaColumn>

                        <s.TimeSelectArea>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="취침 시간"
                                    value={props.sleepTime}
                                    onChange={(newValue) => {
                                        props.setSleepTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="기상 시간"
                                    value={props.wakeTime}
                                    onChange={(newValue) => {
                                        props.setWakeTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </s.TimeSelectArea>
                    </s.SettingContentAreaColumn>
                </s.SettingItem>
                <s.SettingItemSmallLast>
                    <s.SettingTitleArea>
                        <s.SettingTitleText> 방해 금지</s.SettingTitleText>
                    </s.SettingTitleArea>
                    <s.SettingContentArea>
                        <input type="checkbox" checked={props.avoidDisturb} onChange={(e) => props.setAvoidDisturb(e.target.checked)} />
                        {props.avoidDisturb ? (
                            <h5>수면 중 자리에서 벗어날시 무드등이 켜지지 않습니다.</h5>
                        ) : (
                            <h5>수면 중 자리에서 벗어날시 무드등이 켜집니다.</h5>
                        )}
                    </s.SettingContentArea>
                </s.SettingItemSmallLast>
            </s.Wrapper>
        </s.Container>
    );
};

export default SettingPresenter;
