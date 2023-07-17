import { render, screen, fireEvent } from "@testing-library/react";
import { FilterMovie } from "../components/movies/filter/FilterMovie";

/* test('renders Modal component with close button', () => {
  const closeModal = jest.fn();
  const onSetFilteredMovie = jest.fn();
  render(<Modal closeModal={closeModal} onSetFilteredMovie={onSetFilteredMovie} />);

  expect(screen.getByText('Contenido')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  expect(closeModal).toHaveBeenCalledTimes(1);
}); */

// Simula la respuesta del fetch api
jest.mock('fetch', () => ({
  mockReturnValue: () => {
    // Simula la respuesta del fetch api
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

  

  // Espera a que la función fetchMovies se ejecute
  
});
