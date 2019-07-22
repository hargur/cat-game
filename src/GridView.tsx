import React from 'react';
import { GridItemAddedOnClick } from './ItemGrid';

export interface GridViewProps{
  items: any[]
}

interface stylesType{
  gridboxStyle: React.CSSProperties
  containerStyle: React.CSSProperties
}

const styles: stylesType = {
    gridboxStyle: {
      float: 'left', 
      width:60, 
      height: 60, 
      border: '1px solid lightblue', 
      textAlign: 'center'
    },
    containerStyle: {
      flex: 1, 
      justifyContent: 'center', 
      display: 'flex',
    }
}

const GridView = (props: GridViewProps) => {
  return <div style={styles.containerStyle}>
    <div style={{width: 190}}>{props.items.map((item, index) => <div key={index} style={styles.gridboxStyle}>
      {item && item.id && <GridItemAddedOnClick id={item.id} image={item.image} />}
    </div>)}</div>
  </div>
}

export default GridView