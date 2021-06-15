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
  // afterEach(() => {
  //   cleanup();
  // });

  it('should render a input value', async () => {
    const {
      getByRole, getByText, getByTestId,
    } = render(<Home />);

    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button');

    input.value = props.value;
    fireEvent.click(add);

    expect(getByText(new RegExp(props.value))).toBeTruthy();
    localStorage.clear();
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
    localStorage.clear();
  });

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

  it('if there is something saved in localStorage', async () => {
    const {
      getByRole, getByTestId,
    } = render(<Home />);

    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button');

    input.value = props.value;
    fireEvent.click(add);

    const isSalve = localStorage.getItem('todo');

    expect(isSalve).toBeTruthy();
    localStorage.clear();
  });

  it('when clicked on trash deletes checked items from localStorage', async () => {
    const {
      getByRole, getByTestId,
    } = render(<Home />);

    const input = getByRole('textbox');
    const add = getByTestId('container-home-add-button');

    input.value = props.value;
    fireEvent.click(add);

    const isSalve = localStorage.getItem('todo');

    expect(isSalve).toBeTruthy();
    localStorage.clear();
  });
});
