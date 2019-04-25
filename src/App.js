import React , { Component }from 'react';
import TodoList from './todo-list/TodoList';
import TodoItems from './todo-items/TodoItems'
import './App.css';

class App extends Component {
  inputElement = React.createRef();
    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: 0,
            },
            index: 0,
        }
    }
    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key;
        });
        this.setState({
            items: filteredItems,
        })
    };
    handleInput = e => {
        const itemText = e.target.value;
        const currentItem = {text: itemText, key: Date.now()};
        this.setState({
           currentItem,
        });
    };
    addItem = e => {
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !== '') {
          const items = [...this.state.items, newItem];
          this.setState({
              items: items,
              currentItem: {text:'',key: '',}
          })
      }
    };
  render() {
    return (
        <div className="main">
            <div className="todolist-wrapper">
                <TodoList
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                    elementIndex={this.state.index}
                />
            </div>
            <div className="todoItem-wrapper">
                <TodoItems entries={this.state.items}  deleteItem={this.deleteItem} />
            </div>
        </div>
    );
  }
}

export default App;
