import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '../../src/components/atoms/divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider />;

export const Primary = Template.bind({});
