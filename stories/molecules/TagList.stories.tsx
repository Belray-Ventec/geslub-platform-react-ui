import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagList } from '../../src/components/molecules/tagList';
import { tagListData } from '../../src/utils/data';

export default {
  title: 'Molecules/TagList',
  component: TagList,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    align: { control: 'select', options: ['left', 'right', 'center'] },
    rounded: { control: 'boolean' },
    onClick: { control: 'func' },
  },
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (args) => (
  <div
    style={{
      width: '500px',
      margin: '0 auto',
      border: '1px dashed #000',
      padding: '30px',
    }}
  >
    <TagList {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  data: tagListData,
  getRowKey: (item) => item.id,
  getValue: (item) => item.name,
  onClick: (item) => console.log(item),
};
