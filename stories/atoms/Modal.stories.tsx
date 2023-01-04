import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../../src/components/atoms/modal';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { geslubTheme } from '../../src/utils/theme';
import { Text } from '@chakra-ui/layout';

export default {
  title: 'Atoms/Modal',
  component: Modal,
  argTypes: {
    ...getThemingArgTypes(geslubTheme, 'Modal'),
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
      <Text fontSize="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa,
        odio doloribus ratione sed soluta explicabo id nam ea quas cumque. Odio
        non accusamus dignissimos praesentium deleniti nulla, perferendis illum.
        Aut consequatur culpa sequi odio sunt voluptatem explicabo, labore
      </Text>
    </Modal>
  </>
);

export const ModalActive = Template.bind({});

ModalActive.args = {
  title: 'Crear Usuario',
  isOpen: true,
  onClose: () => console.log('onClose'),
  showFooter: false,
  actionText: 'Guardar',
  cancelText: 'Cancelar',
  hiddenAction: false,
};
