import React , { Component }from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: [],
            id: 0,
            isModalOpen: false,
        }
    }
    //Method which read what was typed from keyboard
    handleChange = e => this.setState({title: e.target.value});
    //Method which write value from input to the array
    handleSubmit = e => {
        e.preventDefault();
        const newTitle = {
            id: this.state.id,
            title: this.state.title,
        };
        //Updating title and data element when add new Task
        const updatedTitle = [...this.state.data, newTitle];
        this.setState({
            data: updatedTitle,
            title: '',
            id: this.state.id += 1,
            editTitle: false,
        });
    };
    //Method which delete element from todo-list
    handleDelete = id => {
        const filteredData = this.state.data.filter(item => item.id !== id);
        this.setState({
            data: filteredData,
        })
    };
    //Method which update picked task from list
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
            <div>
                <h1 style={{textAlign: 'center'}}>Todo App</h1>
                <div>
                    <TodoInput
                        title={this.state.title}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div>
                    <TodoList
                        data={this.state.data}
                        title={this.state.title}
                        id={this.state.id}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                    />
                </div>
            </div>
        )
    }
}

export default App;
