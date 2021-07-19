import React, { useState, useCallback, useMemo } from 'react';
import Sidebar from "react-sidebar";
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from "styled-react-modal";

import { home } from 'react-icons-kit/fa/home';

// import InputText from './components/elements/inputText';
import InputCheckbox from './components/elements/inputCheckbox';
import PrimaryButton from './components/elements/primaryButton'
import ItemList from './components/elements/ItemList';
import InputItem from './components/elements/inputItem';
import ModalComponent from './components/elements/modal';
// import ChartComponent from './components/elements/chart'
import { Item } from './types'

const AppScreen = styled.div`
  width: 100%;
  margin-top: 1cm;
  text-align: center;
  font-size: 24px;
  color: #444444;
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

const items: Item[] = [
  {
    code: '123AB',
    name: 'あああ',
    cost: '1200'
  },
  {
    code: '224OH',
    name: 'いいい',
    cost: '900'
  },
  {
    code: '349LP',
    name: 'ううう',
    cost: '1800'
  }
];

const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

const Text = styled.div`
  padding-left: 8px;
`;


const App = () => {

  const [stateItem, setItem] = useState<Item>({ code: '', name: '', cost: '' });
  const [stateMoldalItem, setModalItem] = useState<Item>({ code: '', name: '', cost: '' });
  const [stateItems, setItems] = useState<Item[]>(items);
  const [stateAddButtonDisabled, setAddButtonDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [stateItemIdx, setItemIdx] = useState<number>(0);
  const [stateSidebar, setSidebar] = useState<boolean>(true);
  // const deleteAll = () => setItem(stateItem.filter(item => item.name === ""));

  const deleteAll = () => {
    setItems(stateItems.filter(item => item.name === ""))
  };

  const deleteItem = (name: string) => {
    setItems(stateItems.filter(item => item.name !== name))
  }

  const selectItem = (idx: number) => {
    setItemIdx(idx);
    setModalItem(stateItems[idx]);
    setIsOpen(!isOpen);
  }

  const editItem = () => {
    const copyItems = [...stateItems];
    copyItems[stateItemIdx] = stateMoldalItem;
    setItems(copyItems);
  }

  const addItem = (state: Item) => {
    setItems(prevItem => prevItem.concat(state));
    setItem({ code: '', name: '', cost: '' });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const AddButtonDisabled = (code: string, name: string) => {
    setAddButtonDisabled(code == "" || name == "");
  }
  
  const isAllItemFilled = (item: Item): boolean => {
    return item.code != "" && item.name != "" && item.cost != "" ? true: false;
  }

  return (
    <ModalProvider>
      <Sidebar 
        sidebar={<b>Sidebar content</b>}
        open={stateSidebar}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => setSidebar(true)}>
          Open sidebar
        </button>
      </Sidebar>
      <AppScreen>
        <InputItem stateItem={stateItem} setItem={setItem} />
        <Control>
          <PrimaryButton onClick={() => (addItem(stateItem))} disabled={!isAllItemFilled(stateItem)}>
            追加
        </PrimaryButton>
          <PrimaryButton onClick={deleteAll} disabled={true}>
            全件登録
        </PrimaryButton>
        </Control>
        {/* <PrimaryButton onClick={() => addItem(stateInput)}> */}
        {/* アイテム追加 */}
        {/* </PrimaryButton> */}
        <ItemList items={stateItems} onDelete={deleteItem} onEdit={selectItem}/>
        <h5>{stateItems.length} 件</h5>
        {/* <ChartComponent></ChartComponent> */}
        <ModalComponent stateItem={stateMoldalItem} setItem={setModalItem} isOpen={(isOpen)} editItem={editItem} toggleModal={toggleModal} />
      </AppScreen>
    </ModalProvider>
  );
}

export default App;
