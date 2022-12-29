import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, {
  ButtonCategoriesE,
  ButtonSizesE,
} from '../components/Button/Button';
import {
  Toast,
  ToastInterfaceT,
  NewToastT,
  ToastTypesE,
  ToastLocationE,
} from '../components';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: [
          ButtonCategoriesE.PRIMARY_SOLID,
          ButtonCategoriesE.PRIMARY_CLEAR,
          ButtonCategoriesE.PRIMARY_OUTLINE,
          ButtonCategoriesE.SECONDARY_SOLID,
          ButtonCategoriesE.SECONDARY_CLEAR,
          ButtonCategoriesE.SECONDARY_OUTLINE,
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [ButtonSizesE.SMALL, ButtonSizesE.MEDIUM, ButtonSizesE.LARGE],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [
          '',
          'star',
          'arrow-left',
          'arrow-right',
          'critical-solid',
          'fx-account',
        ],
      },
    },
    iconPlacedRight: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    active: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const toastRef = useRef<ToastInterfaceT>();

  const handleClick = () => {
    const toast: NewToastT = {
      title: 'Saved Successfully',
      description: 'Your work has been save congragulations.',
      duration: 10000,
      // autoClose: false,
      callback: () => {
        console.log('Im an action!');
      },
      callbackCta: 'Clickerooo',
      icon: 'check',
      type: ToastTypesE.PLAIN,
      location: ToastLocationE.BOTTOM_LEFT,
      pauseOnHover: true,
    };
    toastRef.current?.dispatchToast(toast);
  };

  const handleOtherClick = () => {
    const toast: NewToastT = {
      title: 'Fail Fail',
      description: 'Your work has been deleted forever',
      duration: 5000,
      icon: 'alert-triangle',
      type: ToastTypesE.WARN,
      location: ToastLocationE.TOP_LEFT,
      pauseOnHover: true,
    };
    toastRef.current?.dispatchToast(toast);
  };

  const handleOtherOtherClick = () => {
    const toast: NewToastT = {
      title: 'Great Job',
      description: 'Your work has saved and faxed to us',
      duration: 10000,
      autoClose: false,
      icon: 'check',
      type: ToastTypesE.SUCCESS,
    };
    toastRef.current?.dispatchToast(toast);
  };

  return (
    <>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <Button {...args} onClick={handleClick} />
        <Button {...args} onClick={handleOtherClick} />
        <Button {...args} onClick={handleOtherOtherClick} />
      </main>
      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <Button {...args} />
      </main>
      <Toast
        ref={toastRef}
        title="Success"
        description="Your form has saved!"
      />
    </>
  );
};

// PRIMARY BUTTON
export const Main = Template.bind({});
Main.args = {
  text: 'Main Button',
  category: ButtonCategoriesE.PRIMARY_SOLID,
};
