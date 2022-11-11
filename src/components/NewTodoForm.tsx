import {useRef} from 'react';

// Здесь мы используем проброшеную через пропсы ф-цию добавления Todo - "addTodo" 
// которая находится в App.tsx
interface NewTodoFormProps {
    handleClick: (text:string) => void,
}

const NewTodoForm = ({handleClick}:NewTodoFormProps) => {

// используя неуправляемую форму input'a благодаря хуку UseRef мы по клику на button 
    const inputRef = useRef <HTMLInputElement | null> (null);



// выполняем ф-цию handleClick к которой проброшена ф-ция addTodo и затем после ее выполнения
// мы очищаем поле для ввода командой - inputRef - значение (current) - value (ввод) = '' пустую строку 
    const onClick = ()=> {
        if(inputRef.current)
        {
            handleClick(inputRef.current.value)
            inputRef.current.value = '';
        }
    }

    return(
        <>
        <input
        className="InputTodo"
        type="text"
        placeholder="New Todo"
        ref={inputRef}/>
        
        <button className="btnAddTodo" onClick={onClick}> Add Todo </button>
        </>
    );
};

export default NewTodoForm;