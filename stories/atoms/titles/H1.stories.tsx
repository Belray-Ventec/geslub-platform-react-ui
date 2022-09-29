import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H1 } from '../../../src/components/atoms/h1';

export default {
  title: 'atoms/titles/H1',
  component: H1,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select' },
  },
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args}>{args.children}</H1>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Documentos Técnicos',
  size: 'h1',
};
