import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../../src/components/atoms/icon';
import { icons } from '../../src/components/atoms/icon/const';

export default {
  title: 'Pages/ListIcons',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

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

ListIcons.args = {
  size: 30,
};
