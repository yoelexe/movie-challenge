import { render, screen } from "@testing-library/react";
import { Movies } from "../components/movies/Movies";
import { SearchMovie } from "../components/movies/search/SearchMovie";

test("renders h2", () => {
  render(<Movies />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders SearchMovie", () => {
  render(<SearchMovie />);
  expect(screen.getByPlaceholderText("Search by...")).toBeInTheDocument();
});

