import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TokenPage } from '../../src/components/pages/tokensPage/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/TokenPage',
  component: TokenPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TokenPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenPage> = (args) => <TokenPage />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'TokenPage',
};
