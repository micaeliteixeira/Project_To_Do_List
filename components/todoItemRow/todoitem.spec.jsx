/* eslint-disable react/jsx-props-no-spreading */
import {
  render, screen, fireEvent,
} from '@testing-library/react';

import { TodoItemRow } from '.';

const props = {
  id: '12371',
  value: 'item description',
  isChecked: true,
  onCheck: jest.fn(),
};

describe('TodoItemRow Component', () => {
  beforeEach(() => {
    render(<TodoItemRow {...props} />);
  });

  it('should render a Row Item', async () => {
    expect(screen.getByText(new RegExp(props.value))).toBeTruthy();
  });

  it('should fire a event when check input was clicked', () => {
    const checkInput = screen.getByRole('checkbox');

    fireEvent.click(checkInput);

    expect(props.onCheck).toHaveBeenCalledTimes(1);
  });
});
