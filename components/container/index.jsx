import React, {useState, useRef, useEffect} from 'react';
import TodoList from 'components/todoList';  
import { HiOutlineTrash, HiPlusCircle } from "react-icons/hi";
import useStorage from 'hooks/useStorage'

export const Index = () => {
  const [todos, setTodos] = useState([ ])
  const [error, setError] = useState(false)
  const inputName = useRef()
  const {getData, addSingleData, addData} = useStorage('todo')
  
 
  useEffect (() => {
    setTodos(addData())
  },[] )
  
  function handleChecked({target}){
    const currentInput = todos.filter(todo => todo.id === target.name)[0]
    currentInput.isChecked = target.checked
  
    setTodoStorage(currentInput)
  }

  function handleAdd(){
    const input = {id:Math.random().toString(36).substr(2, 9), value: inputName.current.value }
    
    if(input.value === '') return setError(true)
     setTodos((currentTodos) =>  [...currentTodos, input] )
     setTodoStorage(input)
    inputName.current.value = null
  }


  function handleChange({target}){
    if(target.value === '') return setError(true)
    setError(false)
  }

  return(
    <div className="  w-4/5 ">
      <div className="flex gap-3 mb-4">
        <input 

          onChange={ handleChange}
          ref={inputName} 
          className=" border border-gray-300 rounded-3xl p-2 w-full" 
          type="text"
        />
        <button onClick={handleAdd} > 
          <HiPlusCircle size={40} />
        </button>
        <button > 
          <HiOutlineTrash size={40}/>  
        </button>
      </div>
      <p hidden={!error} className="text-red-500"> Por favor, insira uma Tarefa! </p>
        <TodoList 
          onCheck={handleChecked}
          todos={todos}/>   
    </div>
  )

}
export default Index;
