import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Button } from '.';

describe('Testing Button', () => {
  const onClickFn = jest.fn();

  const setup = () => {
    render(
      <Button ariaLabel="infoItem" onClick={(): void => onClickFn()}>
        Editar
      </Button>
    );
  };

  test('Debe mostrar el boton', async () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Debe mostrar el texto del boton', async () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Editar');
  });

  test('Debe ser clickeable el boton', async () => {
    setup();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
