import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../src/components/atoms/input';
import { InputGroup } from '../../src/components/atoms/inputgroup';
import { InputElement } from '../../src/components/atoms/inputelement';

export default {
  title: 'molecules/InputGroup',
  component: InputGroup,
  argTypes: {
    size: {
      control: 'select',
    },
  },
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args}>
    <InputElement>www.</InputElement>
    <Input placeholder="belray" />
    <InputElement>.com</InputElement>
  </InputGroup>
);

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
};
