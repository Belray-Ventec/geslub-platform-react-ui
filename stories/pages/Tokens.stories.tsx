import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TokenPage } from '../../src/components/pages/tokensPage/';

export default {
  title: 'Pages/TokenPage',
  component: TokenPage,
} as ComponentMeta<typeof TokenPage>;

const Template: ComponentStory<typeof TokenPage> = (args) => <TokenPage />;

export const Primary = Template.bind({});
