import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalWithButton } from '../../src/components/pages/modalWithButton';
import { Heading } from '../../src/components/atoms/heading';
import { Paragraph } from '../../src/components/atoms/paragraph';
import { Divider } from '../../src/components/atoms/divider/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Modal',
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
    <Heading as="h2" size="3xs">
      Modal Title
    </Heading>
    <Divider />
    <Paragraph size="xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa,
      odio doloribus ratione sed soluta explicabo id nam ea quas cumque. Odio
      non accusamus dignissimos praesentium deleniti nulla, perferendis illum.
      Aut consequatur culpa sequi odio sunt voluptatem explicabo, labore
    </Paragraph>
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
