import React, { useState, useEffect } from 'react';
import SettingPresenter from './SettingPresenter';
import { useColor } from 'react-color-palette';
import { userApi } from '../../api/api-user';

const SettingContainer = () => {
    const [color, setColor] = useColor('hex', '#ffffff');
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [openColorPicker, setOpenColorPicker] = useState(false);
    const onClickColorApply = () => {
        setSelectedColor(color.hex);
        setOpenColorPicker(false);
    };
    var sleep = new Date();
    sleep.setHours(22);
    sleep.setMinutes(0);
    var wake = new Date();
    wake.setHours(6);
    wake.setMinutes(0);

    const [sleepTime, setSleepTime] = useState(sleep);
    const [wakeTime, setWakeTime] = useState(wake);
    const [sleepingHour, setSleepingHour] = useState(0);
    const [sleepingMin, setSleepingMin] = useState(0);
    const [avoidDistrub, setAvoidDistrub] = useState(false);

    const onClickSaveButton = async () => {
        if (window.confirm('저장하시겠습니까?') === true) {
            let result = null;
            let settingForm = {
                userId: 'test',
                color: selectedColor,
                sleep_hour: sleepTime.getHours(),
                sleep_min: sleepTime.getMinutes(),
                wake_hour: wakeTime.getHours(),
                wake_min: wakeTime.getMinutes(),
                notDistrub: avoidDistrub,
            };
            try {
                result = await userApi.setting(settingForm);
            } catch (e) {
            } finally {
                result.then((value) => {
                    if (value.data === 'OK') {
                        alert('수정되었습니다.');
                    } else {
                        alert('에러 발생');
                    }
                });
            }
        } else {
            alert('취소');
        }
        return;
    };

    const onClickResetButton = () => {};

    useEffect(() => {
        var sHour = 24 - Math.floor(((sleepTime - wakeTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var sMin = Math.floor(((sleepTime - wakeTime) % (1000 * 60 * 60)) / (1000 * 60));
        setSleepingHour(sHour);
        setSleepingMin(sMin);
    }, [sleepTime, wakeTime]);

    return (
        <SettingPresenter
            color={color}
            setColor={setColor}
            selectedColor={selectedColor}
            openColorPicker={openColorPicker}
            setOpenColorPicker={setOpenColorPicker}
            onClickColorApply={onClickColorApply}
            sleepTime={sleepTime}
            setSleepTime={setSleepTime}
            wakeTime={wakeTime}
            setWakeTime={setWakeTime}
            sleepingHour={sleepingHour}
            sleepingMin={sleepingMin}
            avoidDistrub={avoidDistrub}
            setAvoidDistrub={setAvoidDistrub}
            onClickSaveButton={onClickSaveButton}
        />
    );
};

export default SettingContainer;
