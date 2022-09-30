import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropDown } from '../../src/components/molecules/avatarDropDown';
import { Button } from '../../src/components/atoms/button';
import { Paragraph } from '../../src/components/atoms/paragraph';
import { Heading } from '../../src/components/atoms/heading';

export default {
  title: 'Molecules/AvatarDropDown',
  component: AvatarDropDown,
} as ComponentMeta<typeof AvatarDropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: 'https://i.imgur.com/Tlk89Es.jpg',
  avatarTitle: 'Brian Cifuentes',
  size: 'md',
  color: '#000',
  badgeColor: 'green',
  right: true,
};
