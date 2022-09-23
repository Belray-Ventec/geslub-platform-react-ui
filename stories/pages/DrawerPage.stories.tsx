import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DrawerPage } from '../../src/components/pages/drawerPage';

export default {
  title: 'Pages/DrawerPage',
  component: DrawerPage,
  argTypes: {
    themeColor: { control: 'color' },
  },
} as ComponentMeta<typeof DrawerPage>;

const Template: ComponentStory<typeof DrawerPage> = (args) => <DrawerPage />;

export const Primary = Template.bind({});

Primary.args = {};
