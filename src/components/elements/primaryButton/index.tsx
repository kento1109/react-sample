import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
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
    children: ReactNode,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
};
  
const PrimaryButton = (props: Props) => {
    const {
      children,
      onClick,
    } = props;
    return (
      <Button onClick={onClick}>{children}</Button>
    );
  };
  
export default PrimaryButton;