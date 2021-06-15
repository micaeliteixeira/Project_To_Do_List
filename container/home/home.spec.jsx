/* eslint-disable react/jsx-props-no-spreading */
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';

// import { logRoles } from '@testing-library/dom';

import Home from '.';

const props = {
  id: '12371',
  value: 'item description',
  isChecked: true,
  onCheck: jest.fn(),
};

describe('TodoItemRow Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render a input value', async () => {
    const {
      getByRole, getByText, getByTestId,
    } = render(<Home />);

    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button');

    input.value = props.value;
    fireEvent.click(add);

    expect(getByText(new RegExp(props.value))).toBeTruthy();
  });

  it('should render a checkbox', async () => {
    const {
      getByRole, getByTestId, getByText,
    } = render(<Home />);

    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button');

    input.value = props.value;
    fireEvent.click(add);

    const checkInput = getByRole('checkbox');
    fireEvent.click(checkInput);

    expect(getByText(new RegExp(props.value))).toBeTruthy();
  });

  it('should show error message case empty input is submited', () => {
    const { getByTestId} = render(<Home />);

    const add = getByTestId('container-home-add-button')

    fireEvent.click(add) 
    const error = getByTestId('home-input-error')
    expect(error).toBeTruthy();
  })

  it('should show error message case input is empty', () => {
    const { getByTestId, getByRole} = render(<Home />);
  
    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button')

    fireEvent.change(input, {target: {value: 'Tarefa1'}}) 
    fireEvent.change(input, {target: {value: ''}})
    const error = getByTestId('home-input-error')
    expect(error).toBeTruthy();
  })

  it('should render remove a checkbox', async () => {
    const {
      getByRole, getByTestId,
    } = render(<Home />);

    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button');

    input.value = props.value;
    fireEvent.click(add);

    const checkInput = getByRole('checkbox');
    fireEvent.click(checkInput);

    const remove = getByTestId('container-home-remove-button');
    fireEvent.click(remove);

    expect(checkInput).not.toBeNull();
  });
});
