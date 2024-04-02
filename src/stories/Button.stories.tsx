import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: [
          'primary_solid',
          'primary_outline',
          'primary_clear',
          'secondary_solid',
          'secondary_outline',
          'secondary_clear',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [
          '',
          'star',
          'arrow-left',
          'arrow-right',
          'critical-solid',
          'fx-account',
        ],
      },
    },
    // Note: adding a react node as an option does not work in Story book
    customIcon: {
      control: {
        type: 'select',
        options: [],
      },
    },
    iconPlacedRight: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    active: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme</h3>
      <Button {...args} />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <Button {...args} />
    </main>
  </>
);

// PRIMARY BUTTON
export const Main = Template.bind({});
Main.args = {
  text: 'Main Button',
  category: 'primary_solid',
};
