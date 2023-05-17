import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pill from '../components/Pill/Pill';

export default {
  title: 'Example/Pill',
  component: Pill,
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'rainbow', 'warm', 'cool'],
      },
    },
  },
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme</h3>
      <Pill {...args} />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <Pill {...args} />
    </main>
  </>
);

export const Main = Template.bind({});
Main.args = {
  title: 'Pill',
  category: 'primary',
};
