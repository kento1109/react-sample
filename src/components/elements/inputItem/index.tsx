import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

// import InputText from '../inputText';
import InputCheckbox from '../inputCheckbox';
import PrimaryButton from '../primaryButton';
import {Item} from '../../../types'

const InputText = styled.input`
  height: 60px;
  width: 450px;
  border: 1px solid #BEBEBE;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 16px;
  font-size: 24px;
  color: #222222;
  ::placeholder {
    color: #C1C1C1;
  }
`;

const InputCheck = styled.input`
  height: 60px;
  width: 450px;
  border: 1px solid #BEBEBE;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 16px;
  font-size: 24px;
  color: #222222
`;


type Props = {
    stateItem: Item;
    setItem: Dispatch<SetStateAction<Item>>
};

const InputItem=(props: Props)=>{

    const {stateItem, setItem} = props;

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...stateItem, name: e.target.value});
    };
    const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...stateItem, passed: e.target.checked});
    };

    return (
        <>
        <label>名前
        <InputText
            type="text"
            value={stateItem.name}
            onChange={handleChangeValue}
        />
        </label>
        <label>通過
        <InputCheck
            type="checkbox"
            checked={stateItem.passed}
            onChange={handleChangeChecked}
        />
        </label>
        </>
    );
}


export default InputItem;
