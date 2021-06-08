import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";


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

    const [opacity, setOpacity] = useState(0);

    // function toggleModal() {
    //     setOpacity(0);
    //     setIsOpen(!isOpen);
    // }

    // function afterOpen() {
    //     setTimeout(() => {
    //     setOpacity(1);
    //     }, 100);
    // }

    function beforeClose() {
        return new Promise((resolve) => {
        setOpacity(0);    
        setTimeout(resolve, 300);
        });
    }

    return (
        <StyledModal isOpen={isOpen} onBackgroundClick={()=>(toggleModal())}>
            <div>Model Open</div>
            <button onClick={()=>(toggleModal())}>Close me</button>
        </StyledModal>
    );
    }

export default ModalCcmponent;