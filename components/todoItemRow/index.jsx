import React from 'react';

export const TodoItemRow = ({
  id, value, isChecked, onCheck,
}) => (

  <div>
    <label className="p-1 center" htmlFor={id}>
      <input
        name={id}
        className="mr-4 rounded blue-400"
        type="checkbox"
        onChange={onCheck}
        defaultChecked={isChecked}
      />
      {value}
      <hr />
    </label>

  </div>
);

export default TodoItemRow;
