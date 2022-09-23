import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Tag } from '../src/components/atoms/tag';

describe('Testing Tag', () => {
  const onClickFn = jest.fn();

  const setup = () => {
    render(
      <Tag color="#fff" backgroundColor="#00a65a" onClick={() => onClickFn()}>
        Editar
      </Tag>
    );
  };

  test('Debe mostrar el texto del tag', async () => {
    setup();
    const tag = screen.getByText(/editar/i);
    expect(tag).toBeInTheDocument();
  });

  test('Debe mostrar el tag con el color y el background', async () => {
    setup();
    const tag = screen.getByText(/editar/i);
    expect(tag).toHaveStyle('background-color: #00a65a');
    expect(tag).toHaveStyle('color: #fff');
  });

  test('Debe llamar a la función onClick', async () => {
    setup();
    const tag = screen.getByText(/editar/i);
    fireEvent.click(tag);
    expect(onClickFn).toHaveBeenCalled();
  });
});
