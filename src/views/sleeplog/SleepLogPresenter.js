import React from 'react';
import * as s from './SleepLogStyled';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import {BsArrowLeftCircle} from 'react-icons/bs';
import {BsArrowRightCircle} from 'react-icons/bs';

const SleepLogPresenter = ({...props}) => {

    return (
        <s.Container>
            <s.WrapperTopArea>수면 기록</s.WrapperTopArea>
            <s.Wrapper>
                {props.sleepData ? 
                <>
                 <s.TotalInfo>
                    <s.TotalInfoMenuItem>
                        <s.TotalInfoMenuText>평균 수면 시간</s.TotalInfoMenuText>
                        <s.TotalInfoMenuBox>{props.sleepData.avg_sleep}</s.TotalInfoMenuBox>
                    </s.TotalInfoMenuItem>
                    <s.TotalInfoMenuItem>
                        <s.TotalInfoMenuText>평균 이탈 횟수</s.TotalInfoMenuText>
                        <s.TotalInfoMenuBox>{props.sleepData.avg_break}</s.TotalInfoMenuBox>
                    </s.TotalInfoMenuItem>
                    <s.TotalInfoMenuItem>
                        <s.TotalInfoMenuText>평균 기상 시간</s.TotalInfoMenuText>
                        <s.TotalInfoMenuBox>{props.sleepData.avg_wake}</s.TotalInfoMenuBox>
                    </s.TotalInfoMenuItem>
                </s.TotalInfo>

                <s.SleepGraph>
                    <ComposedChart
                        width={800}
                        height={400}
                        data={props.viewSleepData}
                        margin={{ top: 40, right: 40, bottom: 30, left: 40 }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="date" />
                        <YAxis dataKey="sleepTime" />
                        <Tooltip />
                        <Bar barSize={20} dataKey="break_count" fill="#153D77" />
                        <Bar barSize={20} dataKey="sleepTime" fill="#808080" />
                    </ComposedChart>
                    {props.page === 1 ? null : 
                        <BsArrowLeftCircle 
                            color={'#16a085'} 
                            size={30}
                            onClick={() => props.setPage(props.page-1)}
                        />}

                    {props.maxPage === props.page ? null : 
                        <BsArrowRightCircle 
                            color={'#16a085'} 
                            size={30} 
                            onClick={() => props.setPage(props.page+1)}
                    />}
                </s.SleepGraph>
                </>
                :
                null
            }
               
            </s.Wrapper>
        </s.Container>
    );

}

export default SleepLogPresenter;