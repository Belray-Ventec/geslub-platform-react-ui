import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H1 } from '../../../src/components/atoms/h1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/titles/H1',
  component: H1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select' },
  },
} as ComponentMeta<typeof H1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args}>{args.children}</H1>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Documentos Técnicos',
  size: 'h1',
};
