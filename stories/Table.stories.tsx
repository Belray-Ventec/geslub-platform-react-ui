import { Table } from '../src/components/table';
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TagList from '../src/components/tagList';
import { onEdit, Product, productData } from '../src/utils/data';
import Add from '../src/components/icons/Add';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Tabla Responsiva con Paginación',
      },
    },
  },
  argTypes: {
    themeColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: productData,
  columns: [
    { label: 'Id', getValue: (item) => item.id },
    { label: 'Nombre', getValue: (item) => item.name },
    { label: 'Precio', getValue: (item) => item.price },
    { label: 'Comprar', getValue: (item) => <a href={item.link}>Comprar</a> },
    { label: 'Etiquetas', getValue: (item) => <TagList rounded data={item.tag} /> },
    { label: 'Street', getValue: (item) => item.address.street },
    { label: 'Pais', getValue: (item) => item.address.country },
  ],

  getRowKey: (item: Product): string | number => item.id,
  showPages: true,
  itemsPerPage: 3,
  actions: [
    { label: 'Custom Action', callback: onEdit },
    { label: <Add size={20} fill="#fff" />, callback: onEdit },
  ],
  showInfo: true,
  showDownload: true,
  showShare: true,
  showSee: true,
};
