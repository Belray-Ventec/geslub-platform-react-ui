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

const TemplateGlobal: ComponentStory<typeof Input> = (args) => (
  <>
    <Input placeholder="Size xs" size="xs" />
    <Input placeholder="Size sm" size="sm" />
    <Input placeholder="Size md" size="md" />
    <Input placeholder="Size lg" size="lg" />
  </>
);

export const Default = Template.bind({});
export const DateTime = Template.bind({});
export const Sizes = TemplateGlobal.bind({});
Default.args = {
  size: 'lg',
  placeholder: 'Belray',
  variant: 'outline',
};

DateTime.args = {
  size: 'md',
  type: 'datetime-local',
  variant: 'outline',
};
