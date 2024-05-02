import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { mock } from './mock';

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...mock} />);

    expect(screen.getByRole('img', { name: /mock.title/i })).toHaveAttribute('src', './img/img.png');
    expect(screen.getByRole('heading', { name: /mock.title/i })).toBeInTheDocument();
    expect(screen.getByText('mock body')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
