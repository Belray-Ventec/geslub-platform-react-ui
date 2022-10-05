import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../../src/components/atoms/modal';
import { Heading } from '../../src/components/atoms/heading';
import { Divider } from '../../src/components/atoms/divider';
import { Paragraph } from '../../src/components/atoms/paragraph';

export default {
  title: 'Atoms/Modal',
  component: Modal,
  argTypes: {
    themeColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

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
