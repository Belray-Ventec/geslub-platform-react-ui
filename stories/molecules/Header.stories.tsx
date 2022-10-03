import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../src/components/molecules/header';
import { AvatarDropDown } from '../../src/components/molecules/avatarDropDown';
import { Heading } from '../../src/components/atoms/heading';
import { Paragraph } from '../../src/components/atoms/paragraph';
import { Button } from '../../src/components/atoms/button';
import { Divider } from '../../src/components/atoms/divider';

export default {
  title: 'molecules/Header',
  component: Header,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 300 },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <AvatarDropDown
      src="https://i.imgur.com/Tlk89Es.jpg"
      avatarTitle="Brian Cifuentes"
    >
      <Heading isNoWrap as="h2" size="4xs" color="#000">
        AJUSTES PERSONALES
      </Heading>
      <Divider />
      <Paragraph as="span" size="sm">
        Brian Cifuentes
      </Paragraph>
      <Paragraph as="span" size="xs">
        Administrador
      </Paragraph>
      <Button fullWidth primary>
        Salir
      </Button>
    </AvatarDropDown>
  </Header>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Documentos Técnicos',
  titleSize: '3xs',
};
