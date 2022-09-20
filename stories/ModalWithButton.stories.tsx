import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalWithButton } from '../src/components/modalWithButton/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal/ModalButton',
  component: ModalWithButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: { control: 'color' },
    onOk: { action: 'Click' },
  },
} as ComponentMeta<typeof ModalWithButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalWithButton> = (args) => (
  <ModalWithButton {...args}>
    <h2>Modal Title H2</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa,
      odio doloribus ratione sed soluta explicabo id nam ea quas cumque. Odio
      non accusamus dignissimos praesentium deleniti nulla, perferendis illum.
      Aut consequatur culpa sequi odio sunt voluptatem explicabo, labore
    </p>
  </ModalWithButton>
);

export const ModalButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalButton.args = {
  title: 'Modal Title',
  position: 'top',
  size: 'medium',
  okText: 'Ok',
  cancelText: 'Cancel',
  onOk: () => console.log('Ok'),
  onCancel: () => console.log('Cancel'),
};
