import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../src/components/modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal/ModalActive',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <>
    <h2>Title</h2>
    <div className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
      <div className="grid-item">7</div>
      <div className="grid-item">8</div>
      <div className="grid-item">9</div>
    </div>
    <Modal {...args}>
      <p>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
        esse quis. Sunt ad dolore quis aute consequat. Magna exercitation
        reprehenderit magna aute tempor cupidatat consequat elit dolor
        adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
        duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
        mollit incididunt nisi consectetur esse laborum eiusmod pariatur
        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
      </p>
      <p>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
        esse quis. Sunt ad dolore quis aute consequat. Magna exercitation
        reprehenderit magna aute tempor cupidatat consequat elit dolor
        adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
        duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
        mollit incididunt nisi consectetur esse laborum eiusmod pariatur
        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
      </p>
    </Modal>
  </>
);

export const ModalActive = Template.bind({});

ModalActive.args = {
  isOpen: true,
  title: 'Modal title',
  onOk: () => console.log('ok clicked'),
  onCancel: () => console.log('cancel clicked'),
};
