import React from 'react';
import * as s from './DeviceStyled';

const DevicePresenter = ({...props}) => {
    return (
        <s.Container>
            <s.Logo>기기 연결</s.Logo>
            <s.Wrapper>
                {props.prev === "" ? 
                    <h4 style={{ color: '#108069' }}>기기가 등록되지 않았습니다</h4>
                        :
                    <h4 style={{ color: '#108069' }}>등록된 기기: {props.prev}</h4>
                }
                <s.SerialForm>
                    <s.SerialInput
                        value={props.serialNum}
                        onChange={props.onChangeSerialNum}
                        placeholder="라즈베리파이 시리얼 넘버를 입력해주세요"
                    ></s.SerialInput>
                    <s.SaveButton onClick={props.onClickSaveButton}>저장</s.SaveButton>
                </s.SerialForm>
            </s.Wrapper>
        </s.Container>
    );
}

export default DevicePresenter;