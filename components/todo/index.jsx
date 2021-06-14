import React from 'react';

export const index = ({
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

export default index;
