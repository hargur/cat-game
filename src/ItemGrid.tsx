import React from 'react';
import { ItemType } from './types';

export interface ItemGridProp{
  data: ItemType[]
  clickedItem: any
}


/*<GridItem id={item.id} image={item.image} clicked={() => props.clickedItem}/>*/

export const GridItem = (props: ItemType) => (
  <img key={props.id} 
      alt={props.image} 
      src={props.image}
      style={{width: 'auto', height: '100%'}}
  />
      
)
const ItemGrid = (props: ItemGridProp) => {
  return <div style={{flex: 1}}>
    {props.data.map((item: ItemType) => (
      <img onClick={() => {props.clickedItem(item)}} 
      key={item.id} 
      alt={item.image} 
      style={{width: '25%'}} 
      src={item.image}/>)
      )}
  </div>
}

export default ItemGrid