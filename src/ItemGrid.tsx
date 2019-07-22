import React from 'react';
import { ItemType } from './types';

export interface ItemGridProp{
  data: ItemType[]
  clickedItem: any
}

export const GridItemAddedOnClick = (props: ItemType) => {
  const {id, image} = props;
  return <img key={id} 
      alt={image} 
      src={image}
      style={{width: 'auto', height: '100%'}}
  />
}

const ItemGrid = (props: ItemGridProp) => {
  return <div style={{flex: 1}}>
    {props.data.map((item: ItemType) => (
      <img onClick={() => {props.clickedItem(item)}} 
      key={item.id} 
      alt={item.image} 
      style={{width: '25%', cursor: 'pointer'}} 
      src={item.image}/>)
      )}
  </div>
}

export default ItemGrid