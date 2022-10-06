import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Paragraph } from '.';

describe('Testing Paragraph', () => {
  const setup = (tag: 'p' | 'span' | 'div') => {
    render(
      <Paragraph isItalic as={tag} color="#000">
        Documentos Tecnicos
      </Paragraph>
    );
  };

  it('Debe renderizar el parrafo', () => {
    setup('p');
    const paragraph = screen.getByText('Documentos Tecnicos');
    expect(paragraph).toBeInTheDocument();
  });

  it('Debe renderizar el parrafo en un color #000', () => {
    setup('p');
    const paragraph = screen.getByText('Documentos Tecnicos');
    expect(paragraph).toHaveStyle('color: #000');
  });

  it('Debe renderizar el parrafo con el texto "Documentos Tecnicos"', () => {
    setup('p');
    const paragraph = screen.getByText('Documentos Tecnicos');
    expect(paragraph).toHaveTextContent('Documentos Tecnicos');
  });
});
