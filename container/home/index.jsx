/* eslint-disable consistent-return */

import React, { useState, useRef } from 'react';
import TodoList from 'components/todoList';
import Container from 'components/container';

import { HiOutlineTrash, HiPlusCircle } from 'react-icons/hi';
import useStorage from 'hooks/useStorage';
import { useEffectOnce } from 'react-use';

export const index = ({ cityTemp }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const inputName = useRef();
  const { getData, addData } = useStorage('todo');

  useEffectOnce(() => {
    setTodos(getData());
  });

  function handleChecked({ target }) {
    const currentInput = todos.filter((todo) => todo.id === target.name)[0];
    currentInput.isChecked = target.checked;

    const state = todos.filter((item) => item.id !== currentInput.id);

    addData([...state, currentInput]);
  }

  function handleAdd() {
    const input = {
      id: Math.random().toString(36).substr(2, 9),
      value: inputName.current.value,
    };

    if (input.value === '') return setError(true);

    setTodos((currentTodos) => {
      const newState = [...currentTodos, input];
      addData(newState);

      return newState;
    });

    inputName.current.value = null;
  }

  function handleChange({ target }) {
    if (target.value === '') return setError(true);
    setError(false);
  }

  function handleRemove() {
    const isRemove = todos.filter((todo) => !todo.isChecked);

    setTodos(() => {
      addData(isRemove);

      return isRemove;
    });
  }

  return (
    <Container>
      <div className="  w-4/5 ">
        <div className="flex gap-3 mb-4">
          <input
            onChange={handleChange}
            ref={inputName}
            className=" border border-gray-300 rounded-3xl p-2 w-full"
            type="text"
          />
          <button onClick={handleAdd} type="button">
            <HiPlusCircle size={40} />
          </button>
          <button type="button" onClick={handleRemove}>
            <HiOutlineTrash size={40} />
          </button>
        </div>
        <p hidden={!error} className="text-red-500"> Por favor, insira uma Tarefa! </p>
        <TodoList
          onCheck={handleChecked}
          todos={todos}
        />

        <p>
          Temperatura atual de São Paulo:
          {' '}
          {cityTemp}
          {' '}
        </p>
      </div>
    </Container>
  );
};

export default index;
