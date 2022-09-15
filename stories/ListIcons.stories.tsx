import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../src/components/icon';
import { icons } from '../src/components/icon/const';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icon/ListIcons',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => (
  <div className="list-icon-container">
    {icons.map((icon, index) => (
      <div key={index} className="icon-list">
        <Icon {...args} icon={icon} />
        <p style={{ margin: 0 }}>{icon}</p>
      </div>
    ))}
  </div>
);

export const ListIcons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListIcons.args = {
  size: 30,
  color: '#9a9a9a',
};
