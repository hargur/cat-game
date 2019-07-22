import React from 'react';
import { GridItem } from './ItemGrid';

export interface GridViewProps{
  items: any[]
}

const GridView = (props: GridViewProps) => {
  return <div style={{flex: 1, justifyContent: 'center', display: 'flex'}}>
    <div style={{width:190}}>{props.items.map((item, index) => <div key={index} style={{ float: 'left', width:60, height: 60, border: '1px solid lightblue', textAlign: 'center'}}>
      {item && item.id && <GridItem id={item.id} image={item.image} />}
    </div>)}</div>
  </div>
}

export default GridView