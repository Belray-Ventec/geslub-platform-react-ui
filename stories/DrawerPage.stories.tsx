import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DrawerPage from '../src/components/drawerPage/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DrawerPage',
  component: DrawerPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: { control: 'color' },
  },
} as ComponentMeta<typeof DrawerPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DrawerPage> = (args) => <DrawerPage />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
