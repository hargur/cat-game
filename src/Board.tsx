import React, { useState, useEffect } from 'react';
import ItemGrid from './ItemGrid'
import {itemData} from './data'
import { ItemType } from './types';
import GridView from './GridView';

const Board = () => {
  const [cloneState, setCloneState] = useState(new Array(9).fill(''))
  const [lastFilledValue, setLastFilledValue] = useState(0)
  const [win,setwin]=useState('YOU WON')

  const handleState = (value: ItemType) => {
    let addedItem = cloneState;
    addedItem[lastFilledValue] = value
    setLastFilledValue(lastFilledValue+1)
    setCloneState(addedItem)

    //to check the values in a row
    if((lastFilledValue+1) % 3 === 0 ){
      if(addedItem[lastFilledValue].id === addedItem[lastFilledValue -1].id || addedItem[lastFilledValue - 1].id === addedItem[lastFilledValue - 2].id || addedItem[lastFilledValue - 1].id === addedItem[lastFilledValue].id){
        setwin("YOU LOST")
      }
    }
  }

  //Works as component didupdate
  useEffect(()=> {
    //when last row is filled, print result
    if(lastFilledValue === 9){
      alert(win)
      setCloneState(new Array(9).fill(''))
      setLastFilledValue(0)
    }

  },[cloneState,lastFilledValue,win])

  return <div style={{display: 'flex', alignItems: 'center'}}>
    <ItemGrid data={itemData} clickedItem={handleState}/>
    {cloneState && <GridView items={cloneState}/>}
    </div>
}

export default Board