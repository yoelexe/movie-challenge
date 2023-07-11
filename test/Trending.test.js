import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import {App } from "../src/App";
import "@testing-library/jest-dom"

// como interactua el usuario con el componente
// consulta el DOM para identificar que esta courriendo

// describe -> describir el comportamiento, el callbak de la derecha, la logica a seguir
// mock, tratar de controar, variables y metodos con lo que esperamos

describe("App", () => {
  it('renders button with correct text', () => {
    // renderizar el componente
    const sut = render(<App />)
  
    const title = sut.getByAltText("Now In Cinemas");
    expect(title).toBeInTheDocument();
  })
})
