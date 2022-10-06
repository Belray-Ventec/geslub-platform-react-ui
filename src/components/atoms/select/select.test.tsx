import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from '.';
import { selectData } from '../../../utils/data';

describe('Testing Select', () => {
  const setup = (initialValue?: { label: string; value: string | number }) => {
    render(<Select initialValue={initialValue} options={selectData} />);
  };

  it('Debe mostrar Select', () => {
    setup();
    const select = screen.getByRole('listbox');
    expect(select).toBeInTheDocument();
  });

  it('Debe seleccionar la opcion "Opcion 2" en el select', async () => {
    setup();
    const select = screen.getByRole('listbox');

    fireEvent.click(select);

    const items = await screen.findAllByRole('listitem');

    expect(items[1]).toHaveTextContent('opcion 2');

    fireEvent.click(items[1]);

    expect(select).toHaveTextContent('opcion 2');
  });

  it('Debe tener el label opcion 3 seleccionado como valor inicial', () => {
    setup({ label: 'opcion 3', value: 3 });
    const select = screen.getByRole('listbox');
    expect(select).toHaveTextContent('opcion 3');
  });
});
