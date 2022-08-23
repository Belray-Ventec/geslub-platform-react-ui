import { Table } from '../src/components/table';
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TagList from '../src/components/tagList';
import { Product, productData } from '../src/utils/data';

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
    { label: 'Etiquetas', getValue: (item) => <TagList data={item.tag} /> },
    { label: 'Street', getValue: (item) => item.address.street },
    { label: 'Pais', getValue: (item) => item.address.country },
  ],

  getRowKey: (item: Product): string | number => item.id,
  showPages: true,
  itemsPerPage: 3,
  actions: [],
  showSee: true,
  showDownload: true,
  showInfo: true,
  onDelete: (data) => { console.log(data) },
  onEdit: (data) => { console.log(data) },
  onDeleteItem: (data) => { console.log(data) },
  onSee: (data) => { console.log(data) },
  onDownload: (data) => { console.log(data) },
  onInfo: (data) => { console.log(data) },
  onShare: (data) => { console.log(data) },

};
