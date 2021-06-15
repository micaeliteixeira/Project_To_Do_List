/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

export const TodoItemRow = ({
  id, value, isChecked, onCheck,
}) => (

  <div>
    <label className="p-1 center">
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

TodoItemRow.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onCheck: PropTypes.bool,
}.isRequired;

export default TodoItemRow;
