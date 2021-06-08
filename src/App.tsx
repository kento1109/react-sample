import React, { useState, useCallback, useMemo } from 'react';
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import './App.css';

// import InputText from './components/elements/inputText';
import InputCheckbox from './components/elements/inputCheckbox';
import PrimaryButton from './components/elements/primaryButton'
import ItemList from './components/elements/ItemList';
import ModalCcmponent from './components/elements/modal';
import InputItem from './components/elements/inputItem';
import {Item} from './types'

const items: Item[] = [
  {
    name: '一郎',
    passed: true
  },  
  {
    name: '二郎',
    passed: false
  },
  {
    name: '三郎',
    passed: true
  }
];

const App=()=> {

  const [stateItem, setItem] = useState<Item>({name:'', passed: false});
  const [stateItems, setItems] = useState<Item[]>(items);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const deleteAll = () => setItem(stateItem.filter(item => item.name === ""));

  const deleteAll = () => {
    setItems(stateItems.filter(item => item.name === ""))
  };

  const deleteItem = (name: string) => {
    setItems(stateItems.filter(item => item.name !== name))
  }

  const addItem = (state: Item) => {
    setItems(prevItem => prevItem.concat(state));
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ModalProvider>
    <div className="App">
      <header className="App-header">
        <InputItem stateItem={stateItem} setItem={setItem}/>
        <PrimaryButton onClick={()=>(alert(stateItem.name))}>
          表示
        </PrimaryButton>
        <PrimaryButton onClick={deleteAll}>
          全件削除
        </PrimaryButton>
        {/* <PrimaryButton onClick={() => addItem(stateInput)}> */}
          {/* アイテム追加 */}
        {/* </PrimaryButton> */}
        <PrimaryButton onClick={() => toggleModal()}>
          モーダルオープン
        </PrimaryButton>
        <ItemList items={stateItems} onDelete={deleteItem}/>
        <h5>{stateItems.length}</h5>
        <ModalCcmponent isOpen={(isOpen)} toggleModal={toggleModal}/>
      </header>
    </div>
    </ModalProvider>
  );
}

export default App;
