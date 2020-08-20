import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{

    render(){
        const toDos = this.props.items;
        const listItems = toDos.map((toDo, i) =>
            <li key = {i}>
                <Todo text = {toDo.text} priority={toDo.priority} dueDate ={toDo.dueDate}/>
            </li>
        )

        return (
            <ul>{listItems}</ul>
        )
    }

}
