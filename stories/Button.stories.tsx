import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Size } from '../src/components/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = Template.bind({});

export const Secondary: ComponentStory<typeof Button> = Template.bind({});

export const Rounded: ComponentStory<typeof Button> = Template.bind({});

export const Disabled: ComponentStory<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  text: 'Enviar',
  size: Size.large,
};

Secondary.args = {
  primary: false,
  text: 'Enviar',
  size: Size.medium,
};

Rounded.args = {
  primary: true,
  text: 'Enviar',
  size: Size.large,
  rounded: true,
};

Disabled.args = {
  primary: true,
  text: 'Enviar',
  size: Size.large,
  rounded: true,
  disabled: true,
};
