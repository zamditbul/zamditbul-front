import React, { useState, useEffect } from 'react';
import SleepLogPresenter from './SleepLogPresenter';
import { userApi } from '../../api/api-user';
import * as recoilItem from '../../util/recoilItem';
import { useRecoilValue } from 'recoil';

const SleepLogContainer = () => {
    const token = useRecoilValue(recoilItem.token);
    const [userId, setUserId] = useState('');

    const [sleepData, setSleepData] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [viewSleepData, setViewSleepData] = useState([]);
    const [widthSize, setWidthSize] = useState(window.innerWidth);

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
                result = await userApi.getSleepData("test1");
            } catch (e) {
            } finally {
                setUserId("test1");
                if (result) {
                    setSleepData(result.data);
                    console.log(result);
                    if (result.data.sleepData){
                        var len = result.data.sleepData.length;
                        setMaxPage(Math.floor(len / 3 + 1));
                        console.log(maxPage);
                    }
                    setPage(1);
                    UpdateGraphView();
                }
            }
        }
    };
    
    useEffect(() => {
        fetchData();
        UpdateGraphView();
    },[]);
    
    useEffect(() => {
        UpdateGraphView();
    }, [page, sleepData]);
    
    const UpdateGraphView = () => {
        var temp = new Array();
        if (sleepData) {
            temp.push({
                date: sleepData.sleepData[page * 3 - 3].date,
                sleepTime: calculateSleepTime(sleepData.sleepData[page * 3 - 3].sleep_count),
                break_count: sleepData.sleepData[page * 3 - 3].break_count,
            });
            if (sleepData.sleepData[page * 3 - 2]) {
                temp.push({
                    date: sleepData.sleepData[page * 3 - 2].date,
                    sleepTime: calculateSleepTime(sleepData.sleepData[page * 3 - 2].sleep_count),
                    break_count: sleepData.sleepData[page * 3 - 2].break_count,
                });
            }
            if (sleepData.sleepData[page * 3 - 1]) {
                temp.push({
                    date: sleepData.sleepData[page * 3 - 1].date,
                    sleepTime: calculateSleepTime(sleepData.sleepData[page * 3 - 1].sleep_count),
                    break_count: sleepData.sleepData[page * 3 - 1].break_count,
                });
            }
            setViewSleepData(temp);
            console.log("viewsleep;:::",viewSleepData);
        }
    }

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