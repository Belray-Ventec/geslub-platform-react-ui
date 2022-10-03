import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../../src/components/atoms/avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const TemplateSize: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Avatar size="2xs" src="https://i.imgur.com/TutKhdx.jpg" />
    <Avatar size="xs" src="https://i.imgur.com/TutKhdx.jpg" />
    <Avatar size="sm" src="https://i.imgur.com/TutKhdx.jpg" />
    <Avatar size="md" src="https://i.imgur.com/TutKhdx.jpg" />
    <Avatar size="lg" src="https://i.imgur.com/TutKhdx.jpg" />
    <Avatar size="xl" src="https://i.imgur.com/TutKhdx.jpg" />
    <Avatar size="2xl" src="https://i.imgur.com/TutKhdx.jpg" />
  </>
);

export const Primary = Template.bind({});

export const Size = TemplateSize.bind({});

Primary.args = {
  title: 'Developer',
  size: '2xl',
  src: 'https://i.imgur.com/TutKhdx.jpg',
};
