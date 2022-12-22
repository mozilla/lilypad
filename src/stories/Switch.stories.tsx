import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../components';

export default {
  title: 'Example/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const onChange = (value: any) => {
  console.log('onchange value', value);
};

const Template: ComponentStory<typeof Switch> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme</h3>
      <Switch
        {...args}
        onChange={onChange}
        icon="x"
        iconOn="check"
        disabled={true}
      />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <Switch {...args} />
    </main>
  </>
);

export const Main = Template.bind({});
Main.args = {
  label: 'Switch me!',
};
