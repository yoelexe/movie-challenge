import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../components/movies/modal/Modal"

test('renders Modal component with close button', () => {
  const closeModal = jest.fn();
  const onSetFilteredMovie = jest.fn();
  render(<Modal closeModal={closeModal} onSetFilteredMovie={onSetFilteredMovie} />);

  // Verificar que el componente Modal se haya renderizado correctamente
  expect(screen.getByText('Contenido')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();

  // Disparar el evento de clic en el botón de cierre
  fireEvent.click(screen.getByRole('button'));

  // Verificar que la función closeModal se haya llamado una vez
  expect(closeModal).toHaveBeenCalledTimes(1);
});