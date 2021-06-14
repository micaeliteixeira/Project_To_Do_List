import React from 'react';
import TodoItemRow from 'components/todoItemRow';

export default function index({ todos, onCheck }) {
  return (
    <div>
      {Boolean(todos?.length) && todos.map((todo) => (
        <TodoItemRow
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
