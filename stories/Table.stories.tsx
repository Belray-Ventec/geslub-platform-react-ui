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
  initialData: productData,
  columns: [
    { label: 'Id', key: 'id', getValue: (item) => item.id },
    { label: 'Nombre', key: 'name', getValue: (item) => item.name },
    { label: 'Precio', key: 'price', getValue: (item) => item.price },
    { label: 'Comprar', key: 'link', getValue: (item) => item.link },
    { label: 'Etiquetas', key: 'tag', getValue: (item) => item.tag },
    { label: 'Pais', key: 'address', getValue: (item) => item.address.country },
  ],

  getRowKey: (item: Product): string | number => item.id,
  renderCell: (key, value): string | JSX.Element => {
    if (key === 'link')
      return (
        <a
          href={String(value)}
          rel="noopener noreferrer"
          target="_blank"
          download
        >
          Comprar
        </a>
      );
    else if (key === 'tag') return <TagList data={value} />;
    else return String(value);
  },
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
