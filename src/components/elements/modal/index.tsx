import React, { useState, Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

import InputItem from '../inputItem';
import PrimaryButton from '../primaryButton'
import {Item} from '../../../types'


const StyledModal = Modal.styled`
  width: 50%;
  height: 65%;
  font-size: 24px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 1;
  transition : all 0.3s ease-in-out;`;

type Props = {
    stateItem: Item,
    setItem: Dispatch<SetStateAction<Item>>
    isOpen: boolean,
    editItem: () => void
    toggleModal: () => void,
};

const ModalComponent = (props: Props) => {
    const {
        stateItem,
        setItem,
        isOpen,
        editItem,
        toggleModal
      } = props;

    return (
        <StyledModal isOpen={isOpen} onBackgroundClick={()=>(toggleModal())}>
            <InputItem stateItem={stateItem} setItem={setItem}/>
            <PrimaryButton onClick={()=>((editItem(), toggleModal()))}>修正</PrimaryButton>
            <PrimaryButton onClick={()=>(toggleModal())}>キャンセル</PrimaryButton>
        </StyledModal>
    );
    }

export default ModalComponent;