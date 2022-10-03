import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropDown } from '../../src/components/molecules/avatarDropDown';
import { Button } from '../../src/components/atoms/button';
import { Paragraph } from '../../src/components/atoms/paragraph';
import { Heading } from '../../src/components/atoms/heading';

export default {
  title: 'Molecules/AvatarDropDown',
  component: AvatarDropDown,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select' },
    badgeColor: { control: 'color' },
  },
  parameters: {
    docs: { inlineStories: false, iframeHeight: 250 },
  },
} as ComponentMeta<typeof AvatarDropDown>;

const Template: ComponentStory<typeof AvatarDropDown> = (args) => (
  <AvatarDropDown {...args}>
    <Heading isNoWrap as="h2" size="4xs" color="#000">
      Ajustes Personales
    </Heading>
    <hr />
    <Paragraph as="span" size="sm">
      Brian Cifuentes
    </Paragraph>
    <Paragraph as="span" size="sm">
      Administrador
    </Paragraph>
    <Button fullWidth primary>
      Salir
    </Button>
  </AvatarDropDown>
);

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://i.imgur.com/Tlk89Es.jpg',
  avatarTitle: 'Brian Cifuentes',
  size: 'md',
  color: '#000',
  badgeColor: 'green',
  right: true,
};
