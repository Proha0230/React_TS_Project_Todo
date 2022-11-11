import React from "react";
import {Todo} from "../types"

interface TodoItemProps extends Todo {
    // id: string,
    // title: string,          Это все будет наследоваться от нашего модуля с типами Todo.ts
    // completed: boolean,
    toggleTodo: (id: Todo['id'])=> void,
    removeTodo: (id: Todo['id'])=> void,
    style?: React.CSSProperties,
}

const TodoItem = ({id, title, completed, style={}, toggleTodo, removeTodo }:TodoItemProps) =>{
    return(
        <li style={{color: 'black', backgroundColor: 'white', ...style}}>
            <input className="TodoListCheck" type="checkbox" checked ={completed} onChange={()=> toggleTodo(id)} />
            <span className="TodoListUl">{title}</span>
            <span className="TodoListX" onClick={()=> removeTodo(id)}> &times; </span>
        </li>
    );
}

export default TodoItem;