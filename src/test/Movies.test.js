import { render, screen } from "@testing-library/react";
import { Movies } from "../components/movies/Movies";
import { SearchMovie } from "../components/movies/search/SearchMovie";
import { Login } from "../components/auth/Login";
import { Error } from "../components/error/Error";
import { Footer } from "../components/home/layouts/Footer";
import { CardMovie } from "../components/movies/search/CardMovie";
import { MovieList } from "../components/movies/search/MovieList";
import { FilterMovie } from "../components/movies/filter/FilterMovie";

test("renders h2 of Movies component", () => {
  render(<Movies />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders SearchMovie", () => {
  render(<SearchMovie />);
  expect(screen.getByPlaceholderText("Search by...")).toBeInTheDocument();
});

test("renders Login", () => {
  render(<Login />);
  expect(screen.getByText("Login and Register")).toBeInTheDocument();
});

test('renders Error component', () => {
  render(<Error />);
  expect(screen.getByAltText("dino-error")).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<Footer />);
  expect(screen.getByText(/2023, Karen Huamán. All rights reserved/i)).toBeInTheDocument();
});

test('renders CardMovie component with title and buttons', () => {
  const title = 'Movie Title';
  const imgSrc = 'path/to/image.jpg';
  render(<CardMovie title={title} imgSrc={imgSrc} />);

  // Verificar que el componente CardMovie se haya renderizado correctamente
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByAltText('')).toBeInTheDocument();

  /* // Verificar que los botones se hayan renderizado correctamente
  expect(screen.getByTestId('button')).toBeInTheDocument();
  expect(screen.getByTestId('button')).toBeInTheDocument(); */
});

test("should render a list of movies", async () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster_path: "/path/to/poster",
    },
    {
      id: 2,
      title: "The Godfather",
      poster_path: "/path/to/poster",
    },
  ];
  render(<MovieList movies={movies} />);
  const movieList = await screen.findAllByRole("img");
  expect(movieList).toHaveLength(20);
});

test("renders FilterMovie component", () => {
  render(<FilterMovie />);
  // Asegúrate de que el componente se renderice correctamente sin errores
  expect(screen.getByRole("select")).toBeInTheDocument();
});

/*
solo puede ser utilizada con elementos HTML o SVG,
porque estos elementos son los que se renderizan en el DOM.
expect(select).toBeInTheDocument();
*/


