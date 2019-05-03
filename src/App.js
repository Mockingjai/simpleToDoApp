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

    handleModalRedactor = () => this.setState({isModalOpen: !this.state.isModalOpen});
    handleInputChange = e => {
        this.setState({title: e.target.value});
        console.log(this.state.title);
    };
    handleSubmitChanges = e => {
        e.preventDefault();
        const newTitle = {
            title: this.state.title,
            id: this.state.id
        };
        const updateTitle = [...this.state.data, newTitle];
        this.setState({
           data: updateTitle,
           id: this.state.id + 1,
        });
        console.log(this.state.title);
    };
    handleDeleteTask = id => {
        const filteredData = this.state.data.filter(listItem => listItem.id !== id);
        this.setState({
            data: filteredData,
        })
    };
    handleEditTask = id => {
        this.handleModalRedactor();
        const filteredData = this.state.data.filter(item => item.id !== id);
        const selectedData = this.state.data.find(item => item.id === id);
        console.log(selectedData);
        this.setState({
            data: filteredData,
            id: id,
        })
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Todo App</h1>
                <hr />
                <TodoInput
                    title={this.state.title}
                    handleInputChange={this.handleInputChange}
                    handleSubmitChanges={this.handleSubmitChanges}
                />
                <TodoList
                    data={this.state.data}
                    title={this.state.title}
                    handleDelete={this.handleDeleteTask}
                    handleEditTask={this.handleEditTask}
                    handleInputChange={this.handleInputChange}
                    handleModalRedactor={this.handleModalRedactor}
                    isModalOpen={this.state.isModalOpen}
                />
            </div>
        )
    }
}

export default App;
