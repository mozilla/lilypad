import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RangeSlider> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme {args.classProp}</h3>
      <RangeSlider start={0} finish={100} value={50} />
    </main>
  </>
);

export const Main = Template.bind({});
Main.args = {};
