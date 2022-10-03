import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Heading } from '../src/components/atoms/heading';
import { Paragraph } from '../src/components/atoms/paragraph';
import { AvatarDropDown } from '../src/components/molecules/avatarDropDown';
import { Button } from '../src/components/atoms/button';

describe('Testing AvatarDropDown', () => {
  const setup = () => {
    render(
      <AvatarDropDown
        avatarTitle="Brian Cifuentes"
        badgeColor="green"
        color="#000"
        right
        size="md"
        src="https://i.imgur.com/Tlk89Es.jpg"
      >
        <Heading as="h2" color="#000" isNoWrap size="4xs">
          Ajustes Personales
        </Heading>
        <hr />
        <Paragraph as="span" size="sm">
          Brian Cifuentes
        </Paragraph>
        <Paragraph as="span" size="sm">
          Administrador
        </Paragraph>
        <Button fullWidth primary>
          Salir
        </Button>
      </AvatarDropDown>
    );
  };

  it('Debe renderizar el AvatarDropDown', () => {
    setup();
    const avatarDropDown = screen.getByAltText('Brian Cifuentes');
    expect(avatarDropDown).toBeInTheDocument();
  });

  it('Debe renderizar el AvatarDropDown con el texto "Ajustes Personales" al presionar en el boton', async () => {
    setup();
    const button = screen.getByLabelText('arrow');
    fireEvent.click(button);

    const contentAvatarDropDown = await screen.findByText('Ajustes Personales');
    expect(contentAvatarDropDown).toBeInTheDocument();
  });
});
