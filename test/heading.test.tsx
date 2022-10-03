import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from '../src/components/atoms/heading';

describe('Testing Heading', () => {
  const setup = (tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
    render(
      <Heading as={tag} color="#000">
        Documentos Tecnicos
      </Heading>
    );
  };

  it('Debe renderizar el titulo en una etiqueta h1', () => {
    setup('h1');
    expect(document.querySelector('h1')).toBeInTheDocument();
  });

  it('Debe renderizar el titulo en una etiqueta h2', () => {
    setup('h2');
    expect(document.querySelector('h2')).toBeInTheDocument();
  });

  it('Debe renderizar el titulo en una etiqueta h3', () => {
    setup('h3');
    expect(document.querySelector('h3')).toBeInTheDocument();
  });

  it('Debe renderizar el titulo en una etiqueta h4', () => {
    setup('h4');
    expect(document.querySelector('h4')).toBeInTheDocument();
  });

  it('Debe renderizar el titulo en una etiqueta h5', () => {
    setup('h5');
    expect(document.querySelector('h5')).toBeInTheDocument();
  });

  it('Debe renderizar el titulo en una etiqueta h6', () => {
    setup('h6');
    expect(document.querySelector('h6')).toBeInTheDocument();
  });

  it('Debe renderizar el titulo en un color #000', () => {
    setup('h1');
    expect(document.querySelector('h1')).toHaveStyle('color: #000');
  });

  it('Debe renderizar el titulo con el texto "Documentos Tecnicos"', () => {
    setup('h1');
    expect(document.querySelector('h1')).toHaveTextContent(
      'Documentos Tecnicos'
    );
  });
});
