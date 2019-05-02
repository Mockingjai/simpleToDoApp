import React , { Component }from 'react';
import TodoInput from './todo-input/todo-input';
import TodoList from './todo-list/todo-list';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        title: '',
        id: 0,
        editTitle: false,
    }
  }
  handleChange = e => {
    this.setState({
        title: e.target.value,
    })
  };
  handleSubmit = e => {
    e.preventDefault();
    const newTitle = {
        id: this.state.id,
        title: this.state.title,
    };
    const updatedTitle = [...this.state.data, newTitle];
    this.setState({
        data: updatedTitle,
        title: '',
        id: this.state.id += 1,
        editTitle: false,
    });
  };
  handleDelete = id => {
      const filteredData = this.state.data.filter(item => item.id !== id);
      this.setState({
          data: filteredData,
      })
  };
  handleEdit = id => {
      const filteredData = this.state.data.filter(item => item.id !== id);
      const selectedData = this.state.data.find(item => item.id === id);
      console.log(selectedData);
      this.setState({
          data: filteredData,
          title: selectedData.title,
          editTitle: true,
          id: id,
      })
  };
  render() {
    return (
        <div className="main">
            <div className="todoinput_wrapper">
                <TodoInput
                    title={this.state.title}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editItem={this.state.editTitle}
                    handleEdit={this.handleEdit}
                />
            </div>
            <TodoList
                data={this.state.data}
                title={this.state.title}
                id={this.state.id}
                handleDelete={this.handleDelete}
            />
        </div>
    );
  }
}

export default App;
