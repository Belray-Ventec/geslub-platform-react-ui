import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalWithButton } from '../../src/components/pages/modalWithButton';
import { Heading, Text } from '@chakra-ui/layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Modal',
  component: ModalWithButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ModalWithButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalWithButton> = (args) => (
  <ModalWithButton {...args}>
    <Heading size={'md'}>Componentes</Heading>
    <Text fontSize={'xl'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa,
      odio doloribus ratione sed soluta explicabo id nam ea quas cumque. Odio
      non accusamus dignissimos praesentium deleniti nulla, perferendis illum.
      Aut consequatur culpa sequi odio sunt voluptatem explicabo, labore
    </Text>
  </ModalWithButton>
);

export const ModalButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalButton.args = {
  title: 'Crear Usuario',
};
