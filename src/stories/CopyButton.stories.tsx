import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CopyButton from '../components/CopyButton/CopyButton';
import '../styles/theme.scss'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CopyButton',
  component: CopyButton,
} as ComponentMeta<typeof CopyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CopyButton> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme - {args.value}</h3>
      <CopyButton {...args} />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme - {args.value}</h3>
      <CopyButton {...args} />
    </main>
  </>
);


export const Main = Template.bind({});
Main.args = {
  successMessage: 'Copied!',
  value: 'Copy Worked!'
};