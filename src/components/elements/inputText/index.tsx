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
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
};
  
const InputText = (props: Props) => {
  const {
    name,
    onChange,
    placeholder,
  } = props;
  console.log('InputText component')
  return (
    <Input
      type=""
      value={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
  
export default InputText;