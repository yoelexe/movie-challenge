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

it("should call the onSetFilteredMovie function when the user changes the select value", () => {
  const onSetFilteredMovie = jest.fn();
  render(<FilterMovie onSetFilteredMovie={onSetFilteredMovie} />);
  const select = screen.findAllByRole("select");
  select.value = "Action";
  fireEvent.click(select);
  expect(onSetFilteredMovie).toBeCalledWith(["Action"]);
  });