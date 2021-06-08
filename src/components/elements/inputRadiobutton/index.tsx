import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Input = styled.input`
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

type Props = {
    value: string,
    isChecked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};
  
const InputRadiobutton = (props: Props) => {
    const {
      value,
      isChecked,
      onChange
    } = props;
    console.log('InputRadiobutton component')
    console.log({value})
    return (
            <Input
                type="radio"
                value={value}
                checked={isChecked}
                onChange={onChange}/>);
  };
    
  export default InputRadiobutton;