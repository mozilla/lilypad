import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../components/Dropdown/Dropdown';
import Button from '../components/Button/Button';
import '../styles/theme.scss';
import '../styles/core/utility.scss';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <>
    <main data-theme="light" style={{ height: '200px', padding: '20px' }}>
      <h3>Light Theme</h3>
      <Dropdown {...args} />
    </main>
    <main
      data-theme="dark"
      style={{ background: '#000000', height: '200px', padding: '20px' }}
    >
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <Dropdown {...args} />
    </main>
  </>
);

const CtaExample = (
  <div style={{ position: 'relative' }}>
    <Button label="cta" text="CTA" />
  </div>
);
const ContentExample = <div style={{ padding: '10px' }}>Dropdown Content</div>;

// LIGHT DROPDOWN
export const Main = Template.bind({});
Main.args = {
  cta: CtaExample,
  content: ContentExample,
  alignment: 'right',
};
