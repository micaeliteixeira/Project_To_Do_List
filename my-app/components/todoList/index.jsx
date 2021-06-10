import React from 'react';
import Todo from 'components/todo'

export default function index({todos, onCheck}){
  return (
  <div>
    {Boolean(todos?.length) && todos.map((todo, index) =>  <Todo 
        id={todo.id}
        key={todo + index} 
        value={todo.value}
        onCheck={onCheck}
        />)
    } 
    
  </div>
  )
};

