import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

import InputItem from '../inputItem';
import {Item} from '../../../types'


const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 1;
  transition : all 0.3s ease-in-out;`;

type Props = {
    isOpen: boolean,
    toggleModal: () => void,
};

const ModalCcmponent = (props: Props) => {
    const {
        isOpen,
        toggleModal
      } = props;

    const [stateItem, setItem] = useState<Item>({name:'', passed: false});

    return (
        <StyledModal isOpen={isOpen} onBackgroundClick={()=>(toggleModal())}>
            <InputItem stateItem={stateItem} setItem={setItem}/>
            <button onClick={()=>(toggleModal())}>Close me</button>
        </StyledModal>
    );
    }

export default ModalCcmponent;