import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '../../src/components/atoms/tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Enviar',
  rounded: true,
};
