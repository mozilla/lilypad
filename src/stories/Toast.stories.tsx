import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
import {
  Toast,
  ToastInterfaceT,
  NewToastT,
  ToastTypesE,
  ToastLocationE,
} from '../components';
import ToastMessage from '../components/Toast/ToastMessage';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Toast',
  component: Toast,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
      defaultValue: 'Toast Title',
    },
    description: {
      name: 'description',
      type: { name: 'string', required: true },
    },
    duration: {
      name: 'duration',
      type: { name: 'number', required: true },
    },
    icon: {
      control: {
        type: 'select',
        options: ['', 'check', 'check-circle', 'x', 'alert-circle', 'smile'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          ToastTypesE.SUCCESS,
          ToastTypesE.WARNING,
          ToastTypesE.ERROR,
          ToastTypesE.INFO,
        ],
      },
    },
    location: {
      control: {
        type: 'select',
        options: [
          ToastLocationE.TOP_LEFT,
          ToastLocationE.TOP_RIGHT,
          ToastLocationE.BOTTOM_LEFT,
          ToastLocationE.BOTTOM_RIGHT,
        ],
      },
    },
    pauseOnHover: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    autoClose: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    callbackCta: {
      name: 'callbackCta',
      type: { name: 'string' },
    },
  },
} as ComponentMeta<typeof Toast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToastMessage> = (args) => {
  const toastRef = useRef<ToastInterfaceT>();
  const toastDarkRef = useRef<ToastInterfaceT>();

  const callback = args.callbackCta ? () => {} : undefined;

  const success: NewToastT = {
    title: args.title,
    description: args.description,
    duration: args.duration,
    type: args.type,
    location: args.location,
    pauseOnHover: args.pauseOnHover,
    autoClose: args.autoClose,
    callback: callback,
    callbackCta: args.callbackCta,
  };

  const handleClick = () => {
    toastRef.current?.dispatchToast(success);
  };

  const handleDarkClick = () => {
    toastDarkRef.current?.dispatchToast(success);
  };

  return (
    <>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <Button
          label="toast button"
          text="Dispatch Toast"
          onClick={handleClick}
        />
        <Toast ref={toastRef} />
      </main>

      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <Button
          label="toast button"
          text="Dispatch Toast"
          onClick={handleDarkClick}
        />
        <Toast ref={toastDarkRef} />
      </main>
    </>
  );
};

// PRIMARY BUTTON
export const Main = Template.bind({});
Main.args = {
  classProp: '',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  duration: 3000,
  type: ToastTypesE.SUCCESS,
  location: ToastLocationE.TOP_RIGHT,
  pauseOnHover: true,
  autoClose: true,
  callbackCta: undefined,
};
