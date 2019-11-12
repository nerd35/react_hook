import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return(
      <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
        {todo.text}
        <div>
          <button className="complete" onClick={() => completeTodo(index)}>Complete</button>
          <button className="remove" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
  )
}
function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" placeholder="Add Todos here ..." value={value} onChange={e => setValue(e.target.value)};/>
      </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
      {
        text:'Learning React hooks',
        isCompleted: false
      },
    {
      text:'work with ekaruz tech',
      isCompleted: false
    },
    {
      text:'building todo app',
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
      <div className="app">
        <h1 className="todoHeader">My Todo App</h1>
        <div className="todo-list">
          {todos.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
  )
}
export default App;