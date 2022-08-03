import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Checkbox/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {

  const [value, setValue] = useState(args.checked);
  const onChange = (value: boolean) => {
    setValue(value);
  };

  const [darkValue, setDarkValue] = useState(args.checked);
  const onDarkChange = (value: boolean) => {
    setDarkValue(value);
  };

  useEffect(() => {
    setValue(args.checked);
    setDarkValue(args.checked);
  }, [args.checked]);

  return (
    <>
      <main data-theme="light" style={{ padding: '20px', fontSize: '16px' }}>
        <form>
          <h3>Light Theme</h3>
          <Checkbox
            disabled={args.disabled}
            label={args.label}
            onChange={onChange}
            checked={value}
          />
        </form>
      </main>

      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px', fontSize: '16px' }}
      >
        <form>
          <h3 style={{ color: '#ffffff' }}>Dark Theme </h3>
          <Checkbox
            disabled={args.disabled}
            label={args.label}
            onChange={onDarkChange}
            checked={darkValue}
          />
        </form>
      </main>
    </>
  );
};

export const Main = Template.bind({});
Main.args = {
  label: 'First Name',
  disabled: false,
};
