import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RangeSlider> = (args) => {
  return (
    <>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme {args.classProp}</h3>
        <RangeSlider {...args} />
      </main>
    </>
  );
};

export const Main = Template.bind({});
Main.args = {
  label: 'range',
  name: 'range',
  id: 'range',
  value: 50,
  finish: 100,
  onChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.target.value);
  },
};
