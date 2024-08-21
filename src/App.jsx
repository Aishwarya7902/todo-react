import { useState } from 'react'
import './App.css'



function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("")

  function addTodo() {
    if (inputValue.trim() !== "") {
      setTodos([...todos, {
        title: inputValue
      }])
      setInputValue(""); //clear input value
    }

  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos)
  }


  return (

    <div className="flex items-start justify-center min-h-screen bg-blue-950 p-4">
      <div className="w-full max-w-md bg-indigo-600 shadow-lg rounded-lg p-6">
      <div className="mb-4 flex">
      <input
        type='text'
        className="p-2 border rounded bg-slate-800"
        value={inputValue}
        placeholder='Add Todo'
        onChange={(e) => setInputValue(e.target.value)

        }
      />
      <button
        onClick={addTodo}
        className="ml-2 p-2 bg-purple-600 text-white rounded"
      >Add </button>
       </div>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          index={index}
          deleteTodo={deleteTodo}
        />

      )
      )}
      </div>

    </div>

  )
}

function Todo({ title, index, deleteTodo }) {


  return <div className="flex justify-between items-center p-4 bg-blue-300 shadow-md rounded-lg mb-4">
    <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
    <button
      onClick={() => deleteTodo(index)}
      className="bg-sky-900 text-white px-3 py-1 rounded hover:bg-indigo-400 transition-colors duration-200"
    >Delete</button>
  </div>
}




export default App
