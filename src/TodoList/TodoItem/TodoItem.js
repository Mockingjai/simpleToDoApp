import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return(
            <div>
                {
                    this.props.data.map(listItem => {
                        return (
                            <li
                                style={{listStyle: 'none'}}
                                key={listItem.id}>
                                {listItem.title}
                                <button onClick={() => this.props.handleDelete(listItem.id)}>Delete task</button>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoItem;