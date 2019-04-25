import React from 'react';
import './index.css';
const Todo = ({todo, remove}) => {
    //Each Todo
    return (<li onClick={remove(todo.id)}>{todo.text}</li>)
};
const TodoList = ({todos, remove}) => {
    //Map thought the todos
    const todosMap = todos.map((todo) => {
       return (
           <Todo todo={todo} key={todo.id} remove={remove}/>
       )
    });
    return (<ul>{todosMap}</ul>)
};
export default TodoList;