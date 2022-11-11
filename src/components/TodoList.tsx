import { Todo } from "../types";
import TodoItem from "./TodoItem";


// мы пробросили ф-ции удаления/обновления состояния из App.tsx сюда, отсюда уже мы через пропсы
// пробрасываем их в TodoItem.tsx . Мы добавили их в TodoListProps и собственно в сам компонент в return'e
interface TodoListProps {
    list: Todo[],
    toggleTodo: (id: Todo['id'])=> void,
    removeTodo: (id: Todo['id'])=> void,
}

const TodoList = ({list,toggleTodo,removeTodo}:TodoListProps) =>{
    return(
        <ul>
            {list.map((todo)=>(
                <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList;