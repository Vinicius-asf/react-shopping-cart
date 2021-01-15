import "./App.css";
// import Item from './components/item';
import ItemList from "./components/items";
import React, { Component } from "react";

class App extends Component {
    state = {
		newItem:{
			name:"",
			price:0,
			count:1
		},
        listName: "",
        items: [
            { name: "item", price: 10.92, count: 2 },
            { name: "item 2", price: 2.92, count: 5 },
        ],
	};

	handleIncrement = (item) => {
        // console.log(item)
        const items = [...this.state.items];
        // console.log(items)
        const index = items.indexOf(item);
        items[index] = {...item};
        items[index].count++;
        this.setState({items});
    };

    handleDecrement = (item) => {
        // console.log(item)
        const items = [...this.state.items];
        // console.log(items)
        const index = items.indexOf(item);
        items[index] = {...item};
        items[index].count--;
        if(items[index].count === 0){
            this.handleDelete(item.name)
        }
        else{
            this.setState({items});
        }
    };

    handleDelete = (id) => {
        let items = this.state.items.filter((item) => item.name !== id)
        this.setState({items})
    };

	handleAdd = (event) =>{
		let newState = {...this.state}
		const item = {name:'', price:0,count:1}
		newState.items.push(newState.newItem)
		newState.newItem = item
		this.setState(newState)
	};

	handleChange = (event) =>{
		const target = event.target;
		const name = target.name;
		const value = target.value
		let newState = {...this.state}
		if (name === 'listName'){
			newState.listName = value
		}
		else{
			newState.newItem = {...this.state.newItem}
			if (name === 'name'){
				newState.newItem.name = value
			}
			else {
				newState.newItem.price = value
			}
		}
		this.setState(newState)
	};

    render() {
		let totalPrice = this.state.items.reduce((total, item)=>total + item.count*item.price,0);
		let totalCount = this.state.items.reduce((count, item)=>count + item.count,0);
		totalCount = (totalCount>0)?totalCount+' items':totalCount+' item'
        return (
            <React.Fragment>
				<input name='listName' type='text' value={this.state.listName} onChange={this.handleChange}></input>
				<br/>
				<input name='name' type='text' value={this.state.newItem.name} onChange={this.handleChange}></input>
				<input name='price' type='number' value={this.state.price} onChange={this.handleChange}></input>
				<input type='button' value='Add' onClick={this.handleAdd}/>
                <ItemList 
					items={this.state.items}
					onDelete={this.handleDelete}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
				/>
				<p>totals: {totalCount}|{totalPrice}</p>
            </React.Fragment>
        );
    }
}

export default App;
