import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Input } from './';

describe('Testing Input', () => {
  const setup = () => {
    render(<Input placeholder="Enter the name" />);
  };

  it('Se debe mostrar el input', () => {
    setup();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('Se debe escribir en el input y mostrar el texto', async () => {
    setup();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'Belray' },
    });
    await waitFor(() => {
      expect(input).toHaveValue('Belray');
    });
  });
});
