import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/molecules/header/index';
import { AvatarDropDown } from '../src/components/molecules/avatarDropDown/index';
import React from 'react';
import { Heading } from '../src/components/atoms/heading';
import { Paragraph } from '../src/components/atoms/paragraph';
import { Divider } from '../src/components/atoms/divider/index';
import { Button } from '../src/components/atoms/button';

describe('Testing Header', () => {
  const setup = () => {
    render(
      <Header title="Documentos Técnicos">
        <AvatarDropDown
          avatarTitle="Brian Cifuentes"
          src="https://i.imgur.com/Tlk89Es.jpg"
        >
          <Heading as="h2" color="#000" isNoWrap size="4xs">
            AJUSTES PERSONALES
          </Heading>
          <Divider />
          <Paragraph as="span" size="sm">
            Brian Cifuentes
          </Paragraph>
          <Paragraph as="span" size="xs">
            Administrador
          </Paragraph>
          <Button fullWidth primary>
            Salir
          </Button>
        </AvatarDropDown>
      </Header>
    );
  };

  it('Debe renderizar el Header con el titulo Documentos Técnicos', () => {
    setup();
    const header = screen.getByText('Documentos Técnicos');
    expect(header).toBeInTheDocument();
  });
});
