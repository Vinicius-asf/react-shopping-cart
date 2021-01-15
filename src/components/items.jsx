import React, { Component } from 'react';
import Item from './item';

class ItemList extends Component {
    render() { 
        const {onDelete, onIncrement, onDecrement, items} = this.props;
        return (
            <ul>
                {items.map((item)=>{
                    return <Item
                        key={item.name}
                        item={item}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                })}
            </ul>
        );
    }
}
 
export default ItemList;