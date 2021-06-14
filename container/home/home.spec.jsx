/* eslint-disable react/jsx-props-no-spreading */
import {
  render, screen, fireEvent,
} from '@testing-library/react';

import { logRoles } from '@testing-library/dom';

import Home from '.';

const props = {
  id: '12371',
  value: 'item description',
  isChecked: true,
  onCheck: jest.fn(),
};

describe('TodoItemRow Component', () => {
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

  // it('should render a checkbox', async () => {
  //   const {
  //     debug, getByRole, getByText, getByTestId,
  //   } = render(<Home />);

  //   debug();
  //   // const input = getByRole('textbox');
  //   // const add = getByTestId('container-home-add-button');

  //   // input.value = props.value;
  //   // fireEvent.click(add);

  //   // const checkInput = getByRole('checkbox');

  //   // fireEvent.click(checkInput);

  //   // logRoles(checkInput);

  //   // expect(container.getByText(new RegExp(props.value))).toBeFalsy();
  // });
});
