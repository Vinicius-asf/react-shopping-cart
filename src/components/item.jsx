import React, { Component } from 'react';

class Item extends Component {
    render() { 
        return (
            <li>
                <span>{this.props.item.count}</span>
                <button onClick={()=>this.props.onIncrement(this.props.item)}>+</button>
                <button onClick={()=>this.props.onDecrement(this.props.item)}>-</button>
                {this.props.item.name}|<span>{this.props.item.price}</span>
                <button onClick={()=>this.props.onDelete(this.props.item.name)}>x</button>
            </li>
        );
    }
}
 
export default Item;