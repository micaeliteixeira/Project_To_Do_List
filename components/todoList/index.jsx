import React from 'react';
import Todo from 'components/todo';

export default function index({ todos, onCheck }) {
  return (
    <div>
      {Boolean(todos?.length) && todos.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          value={todo.value}
          onCheck={onCheck}
          isChecked={todo.isChecked}
        />
      ))}

    </div>
  );
}
