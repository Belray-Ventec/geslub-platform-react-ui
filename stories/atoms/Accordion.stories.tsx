import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '../../src/components/atoms/accordion';
import { AccordionItem } from '../../src/components/atoms/accordionItem';

export default {
  title: 'Atoms/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionItem title="Niveles de sectores">
      La propiedad CSS proporciona una forma de excluirse del comportamiento de
      anclaje de desplazamiento del navegador, que ajusta la posición de
      desplazamiento para minimizar los cambios de contenido.overflow-anchor
    </AccordionItem>
    <AccordionItem title="Niveles de comercios">
      La propiedad CSS proporciona una forma de excluirse del comportamiento de
      anclaje de desplazamiento del navegador, que ajusta la posición de
      desplazamiento para minimizar los cambios de contenido.overflow-anchor
    </AccordionItem>
  </Accordion>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
