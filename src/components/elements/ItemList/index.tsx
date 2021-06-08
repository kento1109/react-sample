import React from 'react';
import styled from 'styled-components';

import {Item} from '../../../types'
import PrimaryButton from '../primaryButton';

type Props = {
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    items: Item[]
    onDelete: (name: string) => void
}

const ItemList = (props: Props) => {
    const {
        items,
        onDelete,
      } = props;
  return (
    <>
    {items.map((item,i) => (
      <div>
        <label key={i}>
            {item.name}
            {item.passed ? `○`: `×`}
            <PrimaryButton onClick={()=>(onDelete(item.name))}>削除</PrimaryButton>
        </label>
      </div>
    ))}
    </>
  );
};
  
export default ItemList;