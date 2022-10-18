import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../src/components/atoms/input';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  placeholder: 'Belray',
  variant: 'outline',
};
