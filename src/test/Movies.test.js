import { render, screen } from '@testing-library/react';
import {Movies} from '../components/movies/Movies'

test('renders h2', () => {
  render(<Movies />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
