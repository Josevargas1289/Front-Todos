import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todosform from './components/Todosform'
import axios from 'axios';
import TodosList from './components/TodosList';

function App() {

  const [todoList, setTodosList] = useState([]);
  const [todosSelect, setTodosSelet]= useState(null)

  useEffect(() => {
    axios.get('http://localhost:8005/api/v1/todos')
      .then((res) => setTodosList(res.data))

  }, [])


  const getTodos = ()=>{
    axios.get('http://localhost:8005/api/v1/todos')
    .then((res) => setTodosList(res.data))
  }
  // console.log(todoList);


  const selectTodo = (todos)=>{
    setTodosSelet(todos)
  }
  // console.log(todosSelect);


  return (
    <div className="App">
      <div className='container-app'>
        <div className='title-app'>
          <h1 className='title-app'>App Todos</h1>
        </div>
        <Todosform getTodos= {getTodos} todosSelect = {todosSelect} selectTodo= {selectTodo}/>
        <div className='container-card'>
        <TodosList todoList={todoList} selectTodo = {selectTodo} getTodos = {getTodos} />
        </div>
       
      </div>

    </div>
  )
}

export default App
