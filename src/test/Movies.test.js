import { render, screen } from "@testing-library/react";
import { Movies } from "../components/movies/Movies";
import { SearchMovie } from "../components/movies/search/SearchMovie";
import { Login } from "../components/auth/Login";
import { Error } from "../components/error/Error";
import { Footer } from "../components/home/layouts/Footer";
/* import { Home } from "../components/home/Home"; */
/* import { Carousel } from "../components/home/carousel/Carousel"; */

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



