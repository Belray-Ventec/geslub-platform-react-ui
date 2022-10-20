import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../src/components/atoms/input';
import { Label } from '../../src/components/atoms/label';
import { InputGroup } from '../../src/components/atoms/inputgroup';
import { InputElement } from '../../src/components/atoms/inputelement';
import { InputAddon } from '../../src/components/atoms/inputaddon';
import { Icon } from '../../src/components/atoms/icon';

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

const TemplateLabelInput: ComponentStory<typeof InputGroup> = (args) => (
  <>
    <Label htmlFor="nombre">Nombre</Label>
    <InputGroup {...args}>
      <Input id="nombre" placeholder="belray" />
      <InputElement>$</InputElement>
    </InputGroup>
  </>
);

const TemplateAddon: ComponentStory<typeof InputGroup> = (args) => (
  <>
    <InputGroup {...args}>
      <InputAddon color="#a9a9a9" position="right">
        $
      </InputAddon>
      <Input placeholder="precio" />
    </InputGroup>
    <InputGroup {...args}>
      <InputAddon color="#a9a9a9" position="left">
        <Icon color="#a9a9a9" size={15} icon={'Document'} />
      </InputAddon>
      <Input placeholder="Documento" />
    </InputGroup>
    <InputGroup {...args}>
      <InputElement>
        <Icon color="#a9a9a9" size={15} icon={'Check'} />
      </InputElement>
      <Input placeholder="belray" />
    </InputGroup>
    <InputGroup {...args}>
      <InputElement>Correo</InputElement>
      <Input placeholder="correo" />
      <InputElement>@</InputElement>
      <Input style={{ width: '300px' }} placeholder="gmail.com" />
    </InputGroup>
  </>
);

export const Default = Template.bind({});
export const Addon = TemplateAddon.bind({});
export const LabelInput = TemplateLabelInput.bind({});
Default.args = {
  size: 'lg',
};

Addon.args = {
  size: 'lg',
};
