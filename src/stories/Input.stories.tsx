import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Input/Input';

const initialValues = {
  firstName: 'Dr.Duck',
};

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState(initialValues.firstName);
  const onChange = (e: any) => {
    setValue(e);
  };

  const [darkValue, setDarkValue] = useState(initialValues.firstName);
  const onDarkChange = (e: any) => {
    console.log('e', e);
    setDarkValue(e);
  };

  return (
    <form>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <Input {...args} value={value} onChange={onChange} />
      </main>
      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <Input {...args} value={darkValue} onChange={onDarkChange} />
      </main>
    </form>
  );
};

// LIGHT INPUT
export const Main = Template.bind({});
Main.args = {
  label: 'First Name',
  name: 'firstName',
  type: 'text',
  info: 'Additional Input Information',
  required: true,
};
