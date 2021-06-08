import React from 'react';
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
    isChecked: boolean,
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};
  
const InputCheckbox = (props: Props) => {
  const {
    isChecked,
    // onChange,
  } = props;
  console.log(' component')
  return (
    <Input
      type="checkbox"
      checked={isChecked}
    //   onChange={onChange}
    />
  );
};
  
export default InputCheckbox;