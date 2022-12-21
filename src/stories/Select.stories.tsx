import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '../components/Select/Select';

const initialValues = {
  firstName: 'Dr.Duck',
};

export default {
  title: 'Example/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(initialValues.firstName);
  const onChange = (e: any) => {
    setValue(e.target.valid);
  };

  const [darkValue, setDarkValue] = useState(initialValues.firstName);
  const onDarkChange = (e: any) => {
    setDarkValue(e.target.value);
  };

  return (
    <form>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <Select {...args} value={value} onChange={onChange} />
      </main>
      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <Select {...args} value={darkValue} onChange={onDarkChange} />
      </main>
    </form>
  );
};

export const Main = Template.bind({});
Main.args = {
  label: 'First Name',
  name: 'firstName',
  info: 'Additional Input Information',
  required: true,
  options: [
    { title: '30 Minuts', value: '30' },
    { title: '35 Minuts', value: '35' },
    { title: '40 Minuts', value: '40' },
  ],
};
