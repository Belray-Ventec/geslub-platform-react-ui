import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Accordion } from '.';
import { AccordionItem } from '../accordionItem';
import { Paragraph } from '../paragraph';

describe('Testing Accordion', () => {
  const setup = () => {
    render(
      <Accordion>
        <AccordionItem title="Belray">
          <Paragraph size="xs">Contenido Belray</Paragraph>
        </AccordionItem>
        <AccordionItem title="Ventec">
          <Paragraph size="xs">Contenido Ventec</Paragraph>
        </AccordionItem>
      </Accordion>
    );
  };

  it('Debe renderizar el componente mostrando el titulo de Belray y Ventec', () => {
    setup();
    const belrayAccordionItem = screen.getByRole('button', { name: 'Belray' });
    const ventecAccordionItem = screen.getByRole('button', { name: 'Ventec' });
    expect(belrayAccordionItem).toBeInTheDocument();
    expect(ventecAccordionItem).toBeInTheDocument();
  });

  it('Debe mostrar el contenido del Acordeon al presionar sobre Belray', async () => {
    setup();
    const belrayAccordionItem = screen.getByRole('button', { name: 'Belray' });
    fireEvent.click(belrayAccordionItem);
    const contenido = await screen.findByText('Contenido Belray');
    expect(contenido).toBeInTheDocument();
  });
});
