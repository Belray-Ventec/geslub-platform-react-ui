import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Drawer} from '../src/components/drawer/index';
import Home from '../src/components/icons/Home';
import Eye from '../src/components/icons/Eye';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Drawer',
  component: Drawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => <>
<Drawer {...args} >
<div style={{padding: '20px'}}>
    <h2>Title</h2>
    <div className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>  
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>  
      <div className="grid-item">7</div>
      <div className="grid-item">8</div>
      <div className="grid-item">9</div>  
    </div>
</div>
</Drawer>
</>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: [
    {
    title: 'Item 1',
    icon: <Home size={30} />,
    href: 'www.google.cl', 
    items: [
      {
        title: 'Sub Item 1', 
        href: 'www.google2.com', 
      },
      {
        title: 'Sub Item 2', 
        href: 'www.google2.com', 
      }
    ]
  },
{
    title: 'Item 2',
    icon: <Eye color='#fff' />,
    href: 'www.google.cl',
}
  ]
};
