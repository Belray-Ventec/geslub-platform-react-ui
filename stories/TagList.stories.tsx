import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagList } from '../src/components/tagList';
import { tagListData } from '../src/utils/data';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tags/TagList',
  component: TagList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    align: { control: 'select', options: ['left', 'right', 'center'] },
    rounded: { control: 'boolean' },
    onClick: { control: 'func' },
  },
} as ComponentMeta<typeof TagList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  data: tagListData,
  getRowKey: (item) => item.id,
  getValue: (item) => item.name,
};
