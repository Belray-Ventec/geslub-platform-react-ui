import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast } from '../../src/components/atoms/toast';
import { ToastPage } from '../../src/components/pages/toastPage';
import { ToastContextProvider } from '../../src/contexts/toastContext/toastContext';

export default {
  title: 'atoms/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

const TemplateButton: ComponentStory<typeof Toast> = () => (
  <ToastContextProvider>
    <ToastPage />
  </ToastContextProvider>
);

const TemplateAll: ComponentStory<typeof Toast> = (args) => (
  <>
    <Toast
      status="error"
      onClose={args.onClose}
      description={args.description}
      isClosable
      title="Account created."
    />

    <Toast
      status="success"
      onClose={args.onClose}
      description={args.description}
    />
    <Toast
      status="warning"
      onClose={args.onClose}
      description={args.description}
      isClosable
      title="Account created."
    />
    <Toast
      status="info"
      onClose={args.onClose}
      description={args.description}
    />
  </>
);

export const Primary = Template.bind({});

export const Status = TemplateAll.bind({});

export const ToastButton = TemplateButton.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Account created.',
  description: "We've created your account for you.",
  status: 'info',
};

Status.args = {
  title: 'Account created.',
  description: "We've created your account for you.",
};
