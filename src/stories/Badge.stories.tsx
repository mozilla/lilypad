import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge, { BadgeCategoriesE }from '../components/Badge/Badge'

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    category: {
      control: {
        type: 'select', 
        options: [
          BadgeCategoriesE.PRIMARY,
          BadgeCategoriesE.SECONDARY
        ]
      }
    }
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <>
    <main data-theme="light" style={{ padding: '20px' }}>
      <h3>Light Theme</h3>
      <Badge {...args} />
    </main>
    <main data-theme="dark" style={{ background: '#000000', padding: '20px' }}>
      <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
      <Badge {...args} />
    </main>
  </>
);

export const Main = Template.bind({})
Main.args = {
  name: 'Badge',
  category: BadgeCategoriesE.PRIMARY
}
