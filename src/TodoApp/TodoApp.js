import React, { Component } from 'react';
import TodoForm from '../TodoForm/index';
import TodoList from '../Todo/index';
import Title from '../Titile/index';
//Todo id
window.id = 0;
class TodoApp extends Component {
    constructor(props) {
        //Pass props to parent class
        super(props);
        //Set initial state
        this.state = {
            data: [],
        };
    }
    //Add todo handle
    addTodo = (value) => {
        //Assemble data
        const todo = {text: value, id: window.id++};
        //Update data
        this.state.data.push(todo);
        //Update state
        this.setState({
           data: this.state.data,
        });
    };
    //Remove handle
    removeTodo = (id) => {
        //Filter all todos except the one to be removed
        const remindData = this.state.data.filter((todo) => {
           if(todo.id !== id) {return todo}
        });
        //Update state with filter
        this.setState({
            data: remindData,
        })
    };
    render() {
        return(
            <div>
                <Title />
                <TodoForm addTodo={this.addTodo}/>
                <TodoList
                todos={this.state.data}
                remove={this.removeTodo}
                />
            </div>
        )
    }
}

export default TodoApp;