import React from 'react';
import './index.css';
const TodoForm = ({addTodo}) => {
    //Input tracker
    let input;
    return (
        <div className="addTodo_wrapper">
            <input ref={node => {input = node}} className="input_add-field"/>
            <button onClick={() => {addTodo(input.value); input.value = ''}} className="action_add-btn">Add</button>
        </div>
    )
};
export default TodoForm;