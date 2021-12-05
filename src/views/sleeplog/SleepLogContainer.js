import React, { useState, useEffect } from 'react';
import SleepLogPresenter from './SleepLogPresenter';
import { userApi } from '../../api/api-user';
import * as recoilItem from '../../util/recoilItem';
import { useRecoilValue } from 'recoil';

const data = {
    sleepData: [
        {
            date: '0',
            break_count: 3,
            sleep_count: '06:59:00',
        },

    ],
    avg_sleep: '08:00:00',
    avg_break: 3,
    avg_sleep_time: '22:00:00',
    avg_wake: '06:22:00',
};

const SleepLogContainer = () => {
    const token = useRecoilValue(recoilItem.token);
    const [userId, setUserId] = useState('');

    const [sleepData, setSleepData] = useState(data);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [viewSleepData, setViewSleepData] = useState([]);

    const calculateSleepTime =(value) => {
        var hour = Number(String(value).split(":")[0]);
        var min = Number(String(value).split(":")[1]) / 60;
        return Number(hour+min).toFixed(1);
    }

    const fetchData = async () => {
        let result;
        let id;
        try {
            id = await userApi.getUser(token);
        } catch (e) {
        } finally {
            console.log('userId', id);
            try {
                result = await userApi.getSleepData(id.data);
            } catch (e) {
            } finally {
                setUserId(id.data);
                //색상 설정
                if (result) {
                    setSleepData(result.data);
                    if (result.data.sleepData){
                        var len = result.data.sleepData.length;
                        setMaxPage(len / 3 + 1);
                    }
                    setPage(1);
                }
            }
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    useEffect(() => {
        var temp = new Array();
        temp.push({
            date: sleepData.sleepData[page * 3 - 3].date,
            sleepTime: calculateSleepTime(sleepData.sleepData[page* 3 - 3].sleep_count),
            break_count: sleepData.sleepData[page*3-3].break_count,
        });
        if(sleepData.sleepData[page * 3 - 2]){
            temp.push({
                date: sleepData.sleepData[page * 3 - 2].date,
                sleepTime: calculateSleepTime(sleepData.sleepData[page * 3 - 2].sleep_count),
                break_count: sleepData.sleepData[page * 3 - 2].break_count,
            });
        }
        if(sleepData.sleepData[page * 3 - 1]){
            temp.push({
                date: sleepData.sleepData[page * 3 - 1].date,
                sleepTime: calculateSleepTime(sleepData.sleepData[page * 3 - 1].sleep_count),
                break_count: sleepData.sleepData[page * 3 - 1].break_count,
            });
        }
        setViewSleepData(temp);
        console.log(viewSleepData);

    }, [page]);

    return (
        <SleepLogPresenter
            page={page}
            setPage={setPage}
            viewSleepData={viewSleepData}
            setViewSleepData={setViewSleepData}
            sleepData={sleepData}
            maxPage={maxPage}
        />
    );
}

export default SleepLogContainer;