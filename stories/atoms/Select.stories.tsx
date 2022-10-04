import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../../src/components/atoms/select';

export default {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 250 },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const select = Template.bind({});
export const multiple = Template.bind({});

select.args = {
  options: [
    { label: 'opcion 1', value: 1 },
    { label: 'opcion 2', value: 2 },
    { label: 'opcion 3', value: 3 },
    { label: 'opcion 4', value: 4 },
    { label: 'opcion 5', value: 5 },
    { label: 'opcion 6', value: 6 },
    { label: 'opcion 7', value: 7 },
    { label: 'opcion 8', value: 8 },
    { label: 'opcion 9', value: 9 },
    { label: 'opcion 10', value: 10 },
    { label: 'opcion 11', value: 11 },
    { label: 'opcion 12', value: 12 },
    { label: 'opcion 13', value: 13 },
    { label: 'opcion 14', value: 14 },
    { label: 'opcion 15', value: 15 },
    { label: 'opcion 16', value: 16 },
    { label: 'opcion 17', value: 17 },
    { label: 'opcion 18', value: 18 },
    { label: 'opcion 19', value: 19 },
    { label: 'opcion 20', value: 20 },
  ],
  onChange: (opcion) => console.log(opcion),
  multiple: false,
  initialValue: { label: 'opcion 16', value: 16 },
};

multiple.args = {
  options: [
    { label: 'opcion 1', value: 1 },
    { label: 'opcion 2', value: 2 },
    { label: 'opcion 3', value: 3 },
    { label: 'opcion 4', value: 4 },
    { label: 'opcion 5', value: 5 },
    { label: 'opcion 6', value: 6 },
    { label: 'opcion 7', value: 7 },
    { label: 'opcion 8', value: 8 },
    { label: 'opcion 9', value: 9 },
    { label: 'opcion 10', value: 10 },
    { label: 'opcion 11', value: 11 },
    { label: 'opcion 12', value: 12 },
    { label: 'opcion 13', value: 13 },
    { label: 'opcion 14', value: 14 },
    { label: 'opcion 15', value: 15 },
    { label: 'opcion 16', value: 16 },
    { label: 'opcion 17', value: 17 },
    { label: 'opcion 18', value: 18 },
    { label: 'opcion 19', value: 19 },
    { label: 'opcion 20', value: 20 },
  ],
  onChange: (opcion) => console.log(opcion),
  multiple: true,
  initialValue: [
    { label: 'opcion 16', value: 16 },
    { label: 'opcion 12', value: 12 },
  ],
};
