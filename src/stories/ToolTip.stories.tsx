import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolTip from '../components/ToolTip/ToolTip';
import { Icon } from '../components';
import { Button } from '../components';

export default {
  title: 'Example/ToolTip',
  component: ToolTip,
} as ComponentMeta<typeof ToolTip>;

const Template: ComponentStory<typeof ToolTip> = (args) => {
  return (
    <form>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <ToolTip {...args}>
          <Icon name="info" />
        </ToolTip>

        <ToolTip description="Here is another tip">
          <Button label="tip button" text="Button With Tip" />
        </ToolTip>
      </main>
      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <ToolTip {...args}>
          <Icon color="#ffffff" name="info" />
        </ToolTip>

        <ToolTip description="Here is another tip">
          <Button label="tip button" text="Button With Tip" />
        </ToolTip>
      </main>
    </form>
  );
};

export const Main = Template.bind({});
Main.args = {
  description:
    'Why did the duck go to the chiropractor? To get his back quacked.',
};
