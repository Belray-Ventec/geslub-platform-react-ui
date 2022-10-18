import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Input } from './';
import { Label } from '../label';

describe('Testing Input', () => {
  const setup = () => {
    render(
      <>
        <Label size="md" htmlFor="fullname">
          Nombre Completo
        </Label>
        <Input id="fullname" placeholder="Enter the name" />
      </>
    );
  };

  it('Se debe mostrar el input', () => {
    setup();

    const input = screen.getByLabelText('Nombre Completo');
    expect(input).toBeInTheDocument();
  });

  it('Se debe escribir en el input y mostrar el texto Belray', async () => {
    setup();
    const input = screen.getByLabelText('Nombre Completo');
    fireEvent.change(input, {
      target: { value: 'Belray' },
    });
    await waitFor(() => {
      expect(input).toHaveValue('Belray');
    });
  });
});
