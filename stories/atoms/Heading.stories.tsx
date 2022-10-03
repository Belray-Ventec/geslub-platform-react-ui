import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../../src/components/atoms/heading';

export default {
  title: 'atoms/Heading',
  component: Heading,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select' },
    isBold: { control: 'boolean' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>{args.children}</Heading>
);

const TemplateSize: ComponentStory<typeof Heading> = (args) => (
  <>
    <Heading size="4xs">{args.children}</Heading>
    <Heading size="3xs">{args.children}</Heading>
    <Heading size="2xs">{args.children}</Heading>
    <Heading size="xs">{args.children}</Heading>
    <Heading size="sm">{args.children}</Heading>
    <Heading size="md">{args.children}</Heading>
    <Heading size="lg">{args.children}</Heading>
    <Heading size="xl">{args.children}</Heading>
  </>
);

export const Default = Template.bind({});

export const Size = TemplateSize.bind({});

Default.args = {
  children: 'Documentos Técnicos',
};

Size.args = {
  children: 'Documentos Técnicos',
};
