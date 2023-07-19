import { render, screen } from "@testing-library/react";
import { Movies } from "../components/movies/Movies";
import { SearchMovie } from "../components/movies/search/SearchMovie";
import { Login } from "../components/auth/Login";
import { Error } from "../components/error/Error";
import { CardMovie } from "../components/movies/search/CardMovie";
import { MovieList } from "../components/movies/search/MovieList";
import { FilterMovie } from "../components/movies/filter/FilterMovie";
import { Trending } from "../components/home/trending/Trending";
import App from '../App'
import apiConfig from "../api/apiConfig";
import { MemoryRouter } from "react-router-dom";


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

test("renders Error component", () => {
  render(<Error />);
  expect(screen.getByAltText("dino-error")).toBeInTheDocument();
});

test("renders CardMovie component with title and buttons", () => {
  const title = "Movie Title";
  const imgSrc = "path/to/image.jpg";
  render(<CardMovie title={title} imgSrc={imgSrc} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByAltText("")).toBeInTheDocument();

  /* expect(screen.getByTestId('button')).toBeInTheDocument();
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
  expect(screen.getByRole("select")).toBeInTheDocument();
});

/*
solo puede ser utilizada con elementos HTML o SVG,
porque estos elementos son los que se renderizan en el DOM.
expect(select).toBeInTheDocument();
*/

it('should render the trending movies',  () => {
  render(
    <MemoryRouter>
      <Trending />
    </MemoryRouter>
  );

  expect(screen.getByText('Now In Cinemas')).toBeTruthy();
  expect(screen.getByText('See all')).toBeTruthy();
});

it('should return the original image url', () => {
  const imageUrl = apiConfig.originalImage('some-image.jpg');
  const w500Image = apiConfig.w500Image('image-500.jpg');
  const w154Image = apiConfig.w154Image('image-154.jpg');
  expect(imageUrl).toEqual('https://image.tmdb.org/t/p/original/some-image.jpg');
  expect(w500Image).toEqual('https://image.tmdb.org/t/p/w500/image-500.jpg');
  expect(w154Image).toEqual('https://image.tmdb.org/t/p/w154/image-154.jpg');
});

it("renders the Home component when the path is /", () => {
  render(
    <MemoryRouter><App /></MemoryRouter>);
});

