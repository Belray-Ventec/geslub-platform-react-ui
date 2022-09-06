import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Drawer} from '../src/components/drawer/index';
import Home from '../src/components/icons/Home';
import { drawerData } from '../src/utils/data/index';

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
<Drawer data={drawerData} >
<div style={{padding: '20px'}}>
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique cum itaque reiciendis dignissimos tempora eum sunt veritatis atque, est nam, consequatur eligendi molestias minus aspernatur dicta commodi! Assumenda, odio!
    Ducimus consequuntur nostrum voluptatibus fuga molestias, facere deserunt adipisci, delectus doloribus aliquam rerum mollitia ab temporibus dignissimos corporis nemo! Nemo fugit veritatis voluptatem rerum inventore laborum, nisi similique quisquam esse!
    Possimus animi, commodi quasi nobis et tempore, minus facilis minima atque, quod necessitatibus omnis voluptate. Odit magni beatae autem temporibus repudiandae harum corrupti sapiente rerum, nam voluptas tempora quaerat ipsam.
    Ipsum, perferendis inventore! Similique placeat necessitatibus in mollitia sit quibusdam non quae dolor nesciunt, error accusantium illum consequatur animi. Tempora illum iure sapiente quis earum odit asperiores cupiditate sed illo?
    Similique dolor exercitationem sint dolorum. Consequuntur nihil ad veritatis aliquam delectus voluptatibus soluta voluptates sapiente nemo nostrum, animi vel ea corrupti, quae consectetur debitis eum incidunt asperiores quo quis repellat.</p>
</div>
</Drawer>
</>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};
