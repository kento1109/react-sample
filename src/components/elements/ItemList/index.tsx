import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from "styled-react-modal";

import {Item} from '../../../types'
import {StyledTable, StyledTableHead, TableHeader, TableData} from '../table';

const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

type Props = {
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    items: Item[]
    onEdit: (idx: number) => void
    onDelete: (name: string) => void
}

const ItemList = (props: Props) => {
    const {
        items,
        onEdit,
        onDelete,
      } = props;

  return (
    <Control>   
    <StyledTable>
        <StyledTableHead>
        <tr>
            <TableHeader>商品コード</TableHeader>
            <TableHeader>商品名</TableHeader>
            <TableHeader>原価</TableHeader>
            <TableHeader></TableHeader>
        </tr>
        </StyledTableHead>
        <tbody>
        {items.map((item,i) => (
            <tr key={i}>
                <TableData>{item.code}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>{item.cost} 円</TableData>
                <TableData>
                    <Button onClick={() => (onEdit(i))}>編集</Button>
                    <Button onClick={() => (onDelete(item.name))}>削除</Button>
                </TableData>
            </tr>
        ))}
        </tbody>
    </StyledTable>
    </Control>
  );
};
  
export default ItemList;