import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it("should render the button with the text 'Load more'", () => {
    const mockFN = jest.fn();
    render(<Button text="Load more" onClick={mockFN} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const mockFN = jest.fn();
    render(<Button text="Load more" onClick={mockFN} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);

    expect(mockFN).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    const mockFN = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={mockFN} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const mockFN = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={mockFN} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const mockFN = jest.fn();

    const { container } = render(<Button text="Load more" disabled={false} onClick={mockFN} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
