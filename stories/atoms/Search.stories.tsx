import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '../../src/components/atoms/search';

export default {
  title: 'Atoms/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});

Default.args = {
  timeDebounce: 500,
  handleSearch: (value: string) => {
    console.log(value);
  },
};
