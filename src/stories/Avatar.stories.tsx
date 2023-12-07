import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../components/Avatar/Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme</h3>
      <Avatar {...args} />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <Avatar {...args} />
    </main>
  </>
);

export const Main = Template.bind({});
Main.args = {
  src: 'https://api.dicebear.com/7.x/bottts/png?seed=chat',
  alt: 'JD',
  size: 50,
};
