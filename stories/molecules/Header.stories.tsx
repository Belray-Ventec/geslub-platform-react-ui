import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../src/components/molecules/header';
import { AvatarDropDown } from '../../src/components/molecules/avatarDropDown';
import { Heading } from '../../src/components/atoms/heading';
import { Paragraph } from '../../src/components/atoms/paragraph';
import { Button } from '../../src/components/atoms/button';

export default {
  title: 'molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <AvatarDropDown
      src="https://i.imgur.com/Tlk89Es.jpg"
      avatarTitle="Brian Cifuentes"
    >
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
  </Header>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Documentos Técnicos',
  titleSize: '3xs',
};
