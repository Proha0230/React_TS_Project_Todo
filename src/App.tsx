import { useState} from 'react';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';
import {Todo} from "./types";

function App() {


  const [todos, setTodos]=useState<Todo[]>([]);

// Функция добавления новых Todo'шек
// создаем новый обьект newTodo с типизацией алиаса Todo
// id у нас string , поэтому мы делаем его как новую дату, с преобразованием в Строку
// благодаря методу toString()
// изменяем наш обьект todos (hook useState) добавляя новый обьект newTodo и подгружая все прошлые
// данные ...todos

  const addTodo = (text:string)=>{
    const newTodo:Todo ={
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo,...todos]);
  }

  // Создаем функцию удаления наших Todo.
  // мы принимаем параметр id по типу id состоящем в Алиасе Todo[]
  // мы изменяем todos (hook useState) способом фильтации 
  // мы берем все todo.id и сравнивая его даем изменение на неравный выбранный id 
  // таким образом todo удаляет id и наша запись становится невидимой.

   const removeTodo = (id: Todo['id']) => {
    setTodos (todos.filter(todo => todo.id !== id))
  }

  // Создаем функцию обновления наших Todo.
  // мы принимаем параметр id по типу id состоящем в Алиасе Todo[]
  // мы изменяем todos (hook useState) способом поиска .map и если 
  // todo.id не равен id то мы возвращаем todo 
  // если же выбранная нами todo по id равна этому же id то мы 
  // изменим ее сущность в обекте newTodo - completed на противоположную
  // и подргрузим все остальные оставшиеся todo 
  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map (todo => {
      if(todo.id !==id) return todo;
      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

// мы удаляем подгрузку Todo через Fetch запрос оставляя только те Todo который сами сделаем
// Делаем Fetch Запрос через useEffect
// Фильтруем получаемые данные по типу алиаса Todo как обьект [] 
// с изменением данных в todos (hook useState)

// useEffect( ()=> {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then((data: Todo[])=>{
//     setTodos(data);
//   })
// }, []);

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
{/* в <TodoList /> пробрасываем наши созданные функции удаления и обновления,
    а так же сам обьект с todo (list)*/}
      <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} list={todos}/>
    </div>
  );
}

export default App;
