import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../src/components/atoms/input';
import { InputGroup } from '../../src/components/atoms/inputgroup';
import { InputElement } from '../../src/components/atoms/inputelement';
import { InputAddon } from '../../src/components/atoms/inputaddon';
import { InputWithLabel } from '../../src/components/atoms/input/index';

export default {
  title: 'molecules/InputGroup',
  component: InputGroup,
  argTypes: {
    size: {
      control: 'select',
    },
  },
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args}>
    <InputElement>www.</InputElement>
    <Input placeholder="belray" />
    <InputElement>.com</InputElement>
  </InputGroup>
);

const TemplateAddon: ComponentStory<typeof InputGroup> = (args) => (
  <>
    <InputGroup {...args}>
      <InputAddon color="#a9a9a9" position="left">
        $
      </InputAddon>
      <Input placeholder="belray" />
    </InputGroup>
    <InputGroup {...args}>
      <InputElement>Nombre</InputElement>
      <Input placeholder="belray" />
    </InputGroup>
    <InputGroup {...args}>
      <Input placeholder="correo" />
      <InputElement>@</InputElement>
      <Input style={{ width: '100px' }} placeholder=".com" />
    </InputGroup>

    <InputWithLabel label="Nombre Completo" id="nombrecompleto" />
  </>
);

export const Default = Template.bind({});
export const Addon = TemplateAddon.bind({});
Default.args = {
  size: 'lg',
};

Addon.args = {
  size: 'lg',
};
