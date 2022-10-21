import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Size } from '../../src/components/atoms/button';
import { Icon } from '../../src/components/atoms/icon';

export default {
  title: 'Atoms/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Enviar</Button>
);

export const Primary: ComponentStory<typeof Button> = Template.bind({});

export const Loading: ComponentStory<typeof Button> = Template.bind({});

export const ButtonWithLeftIcon: ComponentStory<typeof Button> = Template.bind(
  {}
);

export const LoadingText: ComponentStory<typeof Button> = Template.bind({});

export const Secondary: ComponentStory<typeof Button> = Template.bind({});

export const Rounded: ComponentStory<typeof Button> = Template.bind({});

export const Disabled: ComponentStory<typeof Button> = Template.bind({});

Primary.args = {
  primary: true,
  size: Size.large,
};

ButtonWithLeftIcon.args = {
  primary: true,
  size: Size.large,
  leftIcon: <Icon icon="Document" size={15} color="#fff" />,
};

Loading.args = {
  primary: true,
  size: Size.large,
  isLoading: true,
};

LoadingText.args = {
  primary: true,
  size: Size.large,
  isLoading: true,
  loadingText: 'Cargando',
};

Secondary.args = {
  primary: false,
  size: Size.medium,
};

Rounded.args = {
  primary: true,
  size: Size.large,
  rounded: true,
};

Disabled.args = {
  primary: true,
  size: Size.large,
  rounded: true,
  disabled: true,
};
