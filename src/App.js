import React , { Component }from 'react';
import TodoInput from './todo-input/todo-input';
import TodoList from './todo-list/todo-list';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        item: '',
        id: 0,
        editItem: false,
    }
  }
  handleChange = e => {
    this.setState({
        item: e.target.value,
    })
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
        id: this.state.id,
        title: this.state.item,
    };
    const updtateItems = [...this.state.data, newItem];
    this.setState({
        data: updtateItems,
        item: '',
        id: this.state.id += 1,
        editItem: false,
    });
  };
  handleDelete = id => {
      const filteredData = this.state.data.filter(item => item.id !== id);
      this.setState({
          data: filteredData,
      })
  };
  // handleEdit = id => {
  //     const filteredData = this.state.data.filter(item => item.id !== id);
  //     const selectedData = this.state.data.find(item => item.id === id);
  //     console.log(selectedData);
  //     this.setState({
  //         data: filteredData,
  //         item: selectedData.title,
  //         editItem: true,
  //         id: id,
  //     })
  // };
  render() {
    return (
        <div className="main">
            <div className="todoinput_wrapper">
                <TodoInput
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editItem={this.state.editItem}
                />
            </div>
            <TodoList
                data={this.state.data}
                item={this.state.item}
                id={this.state.id}
                handleDelete={this.handleDelete}
                // handleEdit={this.handleEdit}
            />
        </div>
    );
  }
}

export default App;
