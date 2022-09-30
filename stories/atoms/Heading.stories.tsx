import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../../src/components/atoms/heading';

export default {
  title: 'atoms/Heading',
  component: Heading,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>{args.children}</Heading>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Documentos Técnicos',
  as: 'h1',
  size: '2xs',
};
