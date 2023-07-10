import '@testing-library/jest-dom/extend-expect'
import { render, screen, test, expect } from '@testing-library/react'
import { Trending } from '../src/components/home/trending/Trending'
import '@testing-library/jest-dom'

test('renders button with correct text', async () => {
  // renderizar el componente
  render(<Trending />)

  await screen.findByText('Now In Cinemas');
  const moviePoster = screen.getAllByRole('img', {name: /poster/i});
  expect(moviePoster.length).toBeGreaterThan(0);
})

