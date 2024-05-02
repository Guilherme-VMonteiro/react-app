import { render, screen } from '@testing-library/react';

import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput/>', () => {
  it('should call have a value of searchValue', () => {
    const searchValueMock = 'testando';
    const fn = jest.fn();

    render(<TextInput handleChange={fn} searchValue={searchValueMock} />);

    const input = screen.getByPlaceholderText(/Type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe(searchValueMock);
  });

  it('should call handleChange function on each key press', () => {
    const searchValueMock = 'testando';
    const fn = jest.fn();

    render(<TextInput handleChange={fn} searchValue={searchValueMock} />);

    const input = screen.getByPlaceholderText(/Type your search/i);

    userEvent.type(input, searchValueMock);

    expect(input.value).toBe(searchValueMock);
    expect(fn).toHaveBeenCalledTimes(searchValueMock.length);
  });

  it('should match snapshot', () => {
    const searchValueMock = 'testando';
    const fn = jest.fn();

    const { container } = render(<TextInput handleChange={fn} searchValue={searchValueMock} />);

    expect(container).toMatchSnapshot();
  });
});
