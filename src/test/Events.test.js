import { render, screen, fireEvent } from "@testing-library/react";
import { FilterMovie } from "../components/movies/filter/FilterMovie";
/* import { SearchMovie } from "../components/movies/search/SearchMovie"; */


/* test('renders Modal component with close button', () => {
  const closeModal = jest.fn();
  const onSetFilteredMovie = jest.fn();
  render(<Modal closeModal={closeModal} onSetFilteredMovie={onSetFilteredMovie} />);

  expect(screen.getByText('Contenido')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  expect(closeModal).toHaveBeenCalledTimes(1);
}); */

// Simula la respuesta del fetch
jest.mock('fetch', () => ({
  mockReturnValue: () => {
    return {
      status: 200,
      json: () => Promise.resolve([{ title: "Movie 1" }, { title: "Movie 2" }]),
    };
  },
}));



it("should call the fetch api", async () => {
  const onSetFilteredMovie = jest.fn();
  render(<FilterMovie onSetFilteredMovie={onSetFilteredMovie} />);
  const select = screen.getByRole("select");
  select.value = "Action";
  fireEvent.change(select);
  
});

/* it("should open the GitHub link in a new tab", () => {
  const { getByTestId } = render(<Footer />);
  const githubLink = getByTestId("github-link");
  fireEvent.click(githubLink);
  expect(window.open).toHaveBeenCalledWith("https://github.com/yoelexe", "_blank");
}); */

/* test('fetches and sets movies correctly', async () => {
  const mockData = { results: ['movie1', 'movie2', 'movie3'] };
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });

  render(<SearchMovie />);

  await screen.findByAltText('Movie 1');

  expect(screen.getByText('Movie 1')).toBeInTheDocument();
  expect(screen.getByText('Movie 2')).toBeInTheDocument();
  expect(screen.getByText('Movie 3')).toBeInTheDocument();

  window.fetch.mockRestore();
}); */



/* test('handles error during API call', async () => {
  const mockError = new Error('API Error');
  jest.spyOn(window, 'fetch').mockImplementation(() => {
    throw mockError;
  });

  render(<SearchMovie />);

  await screen.findByText('Error: API Error');

  expect(screen.getByText('Error: API Error')).toBeInTheDocument();

  window.fetch.mockRestore();
}); */



