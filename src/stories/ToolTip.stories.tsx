import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolTip, {
  ToolTipCategoriesE,
  ToolTipLocationE,
} from '../components/ToolTip/ToolTip';
import { Button } from '../components';

export default {
  title: 'Example/ToolTip',
  component: ToolTip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    description: {
      name: 'description',
      type: { name: 'string', required: true },
      defaultValue: 'Tool tip description.',
    },
    category: {
      control: {
        type: 'select',
        options: [
          ToolTipCategoriesE.PRIMARY,
          ToolTipCategoriesE.SECONDARY,
          ToolTipCategoriesE.TERTIARY,
        ],
      },
    },
    location: {
      control: {
        type: 'select',
        options: [
          ToolTipLocationE.TOP,
          ToolTipLocationE.RIGHT,
          ToolTipLocationE.BOTTOM,
          ToolTipLocationE.LEFT,
        ],
      },
    },
  },
} as ComponentMeta<typeof ToolTip>;

const Template: ComponentStory<typeof ToolTip> = (args) => {
  return (
    <form>
      <main
        data-theme="light"
        style={{
          padding: '20px',
        }}
      >
        <h3>Light Theme</h3>

        <ToolTip
          location={args.location}
          category={args.category}
          description={args.description}
        >
          <Button label="tip button" text="Button With Tip" />
        </ToolTip>
      </main>
      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <ToolTip
          location={args.location}
          category={args.category}
          description={args.description}
        >
          <Button label="tip button" text="Button With Tip" />
        </ToolTip>
      </main>
    </form>
  );
};

export const Main = Template.bind({});
Main.args = {
  location: ToolTipLocationE.TOP,
  category: ToolTipCategoriesE.PRIMARY,
  description:
    'Why did the duck go to the chiropractor? To get his back quacked.',
};
