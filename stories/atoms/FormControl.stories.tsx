import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl } from '../../src/components/atoms/formControl';
import { Label } from '../../src/components/atoms/label';
import { Input } from '../../src/components/atoms/input';
import { InputGroup } from '../../src/components/atoms/inputgroup';
import { InputAddon } from '../../src/components/atoms/inputaddon';
import { FormErrorMessage } from '../../src/components/atoms/formErrorMessage/index';

export default {
  title: 'atoms/FormControl',
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args}>
    <Label htmlFor="nombre">Nombre</Label>
    <InputGroup>
      <Input id="nombre" placeholder="Brian" />
      <InputAddon position="left">$</InputAddon>
    </InputGroup>
    <FormErrorMessage>Debe ingresar el Email</FormErrorMessage>
  </FormControl>
);

export const Primary = Template.bind({});

Primary.args = {
  isRequired: true,
  isError: true,
};
