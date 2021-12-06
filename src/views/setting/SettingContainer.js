import React, { useState, useEffect } from 'react';
import SettingPresenter from './SettingPresenter';
import { useColor, toColor } from 'react-color-palette';
import { userApi } from '../../api/api-user';
import * as recoilItem from '../../util/recoilItem';
import { useRecoilValue } from 'recoil';

const SettingContainer = ({ history }) => {
    const token = useRecoilValue(recoilItem.token);

    const [color, setColor] = useColor('hex', '#000000');
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [openColorPicker, setOpenColorPicker] = useState(false);
    const onClickColorApply = () => {
        setSelectedColor(color.hex);
        setOpenColorPicker(false);
    };

    const [sleepTime, setSleepTime] = useState(null);
    const [wakeTime, setWakeTime] = useState(null);
    const [sleepingHour, setSleepingHour] = useState(0);
    const [sleepingMin, setSleepingMin] = useState(0);
    const [avoidDisturb, setAvoidDisturb] = useState(false);

    const [userId, setUserId] = useState('');
    const [deviceId, setDeviceId] = useState('');
    const [serialNum, setSerialNum] = useState('');

    const fetchData = async () => {
        let result;
        var sleep = new Date();
        sleep.setHours(22);
        sleep.setMinutes(0);
        var wake = new Date();
        wake.setHours(6);
        wake.setMinutes(0);
        let id;
        try {
            id = await userApi.getUser(token);
        } catch (e) {
        } finally {
            try {
                result = await userApi.getSetting(id.data);
            } catch (e) {
            } finally {
                setUserId(id.data);
                //색상 설정
                if (result) {
                    if (result.data.color) {
                        //색상 있을 때 데이터베이스의 내용으로 집어넣음 (없으면 useState 기본값)
                        setColor(toColor('hex', result.data.color));
                        setSelectedColor(result.data.color);
                        setDeviceId(result.data.deviceId);
                        setSerialNum(result.data.serialNum);
                    }

                    result.data.doNotDisturb === true ? setAvoidDisturb(true) : setAvoidDisturb(false); //방해금지 체크 여부

                    if (result.data.sleep !== null) {
                        //기존에 시간을 등록했다면 그 데이터로 처리
                        sleep.setHours(Number(result.data.sleep.split(":")[0]));
                        sleep.setMinutes(Number(result.data.sleep.split(":")[1]));
                        wake.setHours(Number(result.data.wake_up.split(":")[0]));
                        wake.setMinutes(Number(result.data.wake_up.split(":")[1]));
                        setSleepTime(sleep);
                        setWakeTime(wake);
                    }
                }
            }
        }
    };
    const onClickResetButton = () => {
        fetchData();
    };

    const timeToHourMin = (hour, min) =>{
        let temp = "";
        hour < 10 ? temp = temp+ "0"+ hour + ":" : temp = temp + hour + ":";
        min < 10 ? temp = temp + "0" + min : temp = temp + min;
        return temp;
    }

    const onClickSaveButton = async () => {
        let result = null;
        let sleep = timeToHourMin(sleepTime.getHours(), sleepTime.getMinutes());
        let wake = timeToHourMin(wakeTime.getHours(), wakeTime.getMinutes());
        
        let settingForm = {
            user_id: userId,
            device: {
                deviceId: 2,
                serialNum: 'abc',
                color: selectedColor,
                sleep: sleep,
                wake_up: wake,
                doNotDisturb: avoidDisturb,
            }
        };

        if (window.confirm('저장하시겠습니까?') === true) {
            try {
                result = userApi.setting(settingForm);
            } catch (e) {
            } finally {
                result.then((value) => {
                    if (value.data === 'OK') {
                        alert('수정이 완료되었습니다');
                        history.push('/');
                    } else {
                        alert('에러가 발생했습니다. 다시 시도해주세요');
                    }
                });
            }
        }
        return;
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        var sHour = 24 - Math.floor(((sleepTime - wakeTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var sMin = Math.floor(((sleepTime - wakeTime) % (1000 * 60 * 60)) / (1000 * 60));
        if (sHour >= 24) {
            sHour = sHour - 24;
        }
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
            avoidDisturb={avoidDisturb}
            setAvoidDisturb={setAvoidDisturb}
            onClickSaveButton={onClickSaveButton}
            onClickResetButton={onClickResetButton}
        />
    );
};

export default SettingContainer;
