import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '.';

describe('Testing Modal', () => {
  const onCloseFn = jest.fn();
  const onOkFn = jest.fn();
  const onCancelFn = jest.fn();

  const setup = () => {
    render(
      <Modal
        title="Actualizar Información"
        isOpen={true}
        onRequestClose={() => onCloseFn()}
        showOk
        onOk={() => onOkFn()}
        onCancel={() => onCancelFn()}
        cancelText="Cancelar"
        okText="Actualizar"
      >
        <div>Modal Content</div>
      </Modal>
    );
  };

  test('Debe mostrar el modal', async () => {
    setup();
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  test('Debe mostrar el titulo del modal', async () => {
    setup();
    const title = screen.getByText('Actualizar Información');
    expect(title).toBeInTheDocument();
  });

  test('Debe mostrar el contenido del modal', async () => {
    setup();
    const content = screen.getByText('Modal Content');
    expect(content).toBeInTheDocument();
  });

  test('Debe mostrar el boton de Cancelar', async () => {
    setup();
    const button = screen.getByRole('button', { name: 'Cancelar' });
    expect(button).toBeInTheDocument();
  });

  test('Debe mostrar el boton de Actualizar', async () => {
    setup();
    const button = screen.getByRole('button', { name: 'Actualizar' });
    expect(button).toBeInTheDocument();
  });

  test('Debe llamar la funcion de cerrar el modal al presionar Cancelar', async () => {
    setup();
    const button = screen.getByRole('button', { name: 'Cancelar' });
    fireEvent.click(button);
    expect(onCloseFn).toHaveBeenCalled();
  });

  test('Debe llamar la funcion al presionar el boton de Actualizar', async () => {
    setup();
    const button = screen.getByRole('button', { name: 'Actualizar' });
    fireEvent.click(button);
    expect(onOkFn).toHaveBeenCalled();
  });
});
