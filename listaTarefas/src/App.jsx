import { useState } from 'react';
import "./App.css";
import "./components/Todo.jsx"

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return (

      <div className='app'>
        <h1>Lista Tarefas</h1>
        <div className="todo-lista">
          {todos.map((todo) => (
            
          ))}
        </div>
      </div>
  
  )
}

export default App
