import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '../../src/components/atoms/divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Primary = Template.bind({
  vertical: true,
  height: 200,
});
