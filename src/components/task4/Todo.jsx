import { useState } from 'react';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');

    const handleTodo = (event) => {
        const { value } = event.target;
        setTodo(value); 
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, todo]);
        setTodo('');
    }

    const handleRemoveTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input 
                type='text'
                placeholder='add to do here'
                value={todo}
                onChange={handleTodo}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {
                    todoList.map((todo, index) => (
                        <div key={index}>
                            <li>
                                {todo} {" "}
                                <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todo;