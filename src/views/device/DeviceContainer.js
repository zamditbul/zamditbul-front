import DevicePresenter from './DevicePresenter';
import React, { useState, useEffect } from 'react';
import { useColor, toColor } from 'react-color-palette';
import { userApi } from '../../api/api-user';
import * as recoilItem from '../../util/recoilItem';
import { useRecoilValue } from 'recoil';

const DeviceContainer = () => {
    const token = useRecoilValue(recoilItem.token);
    const [userId, setUserId] = useState('');
    const [serialNum, setSerialNum] = useState('데이터 수신중입니다...');
    const [prev, setPrev] = useState("");

    const fetchData = async () => {
        let result;
        let id;
        try {
            id = await userApi.getUser(token);
        } catch (e) {
        } finally {
            try {
                result = await userApi.getSetting(id.data);
                
            } catch (e) {
                setSerialNum("");
            } finally {
                setUserId(id.data);
                if(result.data.serialNum !== "NOT_CONNECTED"){
                    setSerialNum(result.data.serialNum);
                    setPrev(result.data.serialNum);
                } else {
                    setSerialNum("");
                }
            }
        }
    };

    const onClickSaveButton = async () => {
        let submitForm = ({
            serialNum: serialNum,
            user_id: userId
        });

        let result;
        try{
            result = await userApi.deviceConnect(submitForm);
        } catch (e){
            alert('오류가 발생했습니다. SerialNumber를 다시 확인해주세요');
        }
        finally{
            if(result.data === "UNAUTHORIZED"){
                alert("오류가 발생했습니다. SerialNumber를 다시 확인해주세요")
            }
            else if (result.data === "OK"){
                alert("저장되었습니다");
                fetchData();

            }
        }
    }

    const onChangeSerialNum = (e) => {
        setSerialNum(e.target.value);

    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <DevicePresenter
            serialNum = {serialNum}
            onChangeSerialNum = {onChangeSerialNum}
            onClickSaveButton = {onClickSaveButton}
            prev = {prev}
        />
    );
}

export default DeviceContainer;