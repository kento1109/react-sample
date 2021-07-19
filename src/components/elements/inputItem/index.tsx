import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

// import InputText from '../inputText';
import InputCheckbox from '../inputCheckbox';
import PrimaryButton from '../primaryButton';
import {Item} from '../../../types'

const InputText = styled.input`
  height: 80px;
  width: 30%;
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

const Label = styled.label`
    margin-top: 1cm;
    margin-bottom: 0.5em;
    font-weight: bolder;
	color: palevioletred;
    display: block;
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

type Props = {
    stateItem: Item;
    setItem: Dispatch<SetStateAction<Item>>
};

const InputItem=(props: Props)=>{

    const {stateItem, setItem} = props;

    const updateContent = (item: Item) => {
        setItem(item);
    };

    const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...stateItem, code: e.target.value});
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...stateItem, name: e.target.value});
    };

    const handleChangeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...stateItem, cost: e.target.value});
    };

    return (
        <>
        <Label>商品を登録します</Label>
        <Control>
        <InputText
            id="itemCode"
            type="text"
            value={stateItem.code}
            placeholder="商品コード"
            onChange={handleChangeCode}
        />
        </Control>
        <Control>
        <InputText
            id="itemName"
            type="text"
            value={stateItem.name}
            placeholder="商品名"
            onChange={handleChangeName}
        />
        </Control>
        <Control>
        <InputText
            id="itemCost"
            type="number"
            value={stateItem.cost}
            placeholder="原価"
            onChange={handleChangeCost}
        />
        </Control>
        </>
    );
}


export default InputItem;
