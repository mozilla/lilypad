import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import '../styles/theme.scss'

 
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme</h3>
      <ProgressBar {...args} />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <ProgressBar {...args} />
    </main>
  </>
);

// PRIMARY BUTTON
export const Main = Template.bind({});
Main.args = {
  value: 20,
};