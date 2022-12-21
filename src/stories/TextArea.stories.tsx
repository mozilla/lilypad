import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from '../components/TextArea';

const initialValues = {
  firstName: 'Dr.Duck',
};

export default {
  title: 'Example/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
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
        <TextArea {...args} value={value} onChange={onChange} />
      </main>
      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <TextArea {...args} value={darkValue} onChange={onDarkChange} />
      </main>
    </form>
  );
};

export const Main = Template.bind({});
Main.args = {
  label: 'First Name',
  name: 'firstName',
  info: 'Additional Text Area Information',
  required: true,
};
