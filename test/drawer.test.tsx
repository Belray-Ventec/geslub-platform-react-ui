import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Drawer } from '../src/components/drawer';
import { Icon } from '../src/components/icon';

describe('Testing Drawer', () => {
  const setup = () => {
    render(
      <Drawer
        title="Geslub Platform"
        data={[
          {
            label: 'Home',
            icon: <Icon icon="Home" size={25} color="#fff" />,
            to: '/',
          },
          {
            label: 'Lubricantes Especiales',
            icon: <Icon icon="Document" size={25} color="#fff" />,
            sub: [
              {
                label: 'Información técnica',
                to: '/informacion-tecnica',
              },
              {
                label: 'Certificados',
                to: '/certificados',
              },
              {
                label: 'Marketing',
                to: '/marketing',
              },
              {
                label: 'Testimoniales',
                to: '/testimoniales',
              },
              {
                label: 'OEM',
                to: '/oem',
              },
            ],
          },
        ]}
      />
    );
  };

  test('Debe mostrar el drawer', async () => {
    setup();
    const drawer = screen.getAllByRole('navigation');
    drawer.map((element) => expect(element).toBeInTheDocument());
  });

  test('Debe mostrar el titulo del drawer', async () => {
    setup();
    const showDrawerButton = screen.getByLabelText('show drawer');
    fireEvent.click(showDrawerButton);
    const title = screen.getByText('Geslub Platform');
    expect(title).toBeInTheDocument();
  });

  test('Debe mostrar el contenido del drawer', async () => {
    setup();
    const showDrawerButton = screen.getByLabelText('show drawer');
    fireEvent.click(showDrawerButton);
    const content = screen.getByText('Lubricantes Especiales');
    expect(content).toBeInTheDocument();
  });
});
