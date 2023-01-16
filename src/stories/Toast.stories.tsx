import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
// import {
//   Toast,
//   ToastInterfaceT,
//   NewToastT,
//   ToastTypesE,
//   ToastLocationE,
// } from '../components';
import {
  Notification,
  NotificationInterfaceT,
  NewNotificationT,
  NotificationTypesE,
  NotificationLocationE,
  IconT,
} from '../components';
import ToastMessage from '../components/Notification/ToastMessage';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Toast',
  component: Notification,
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
    hasIcon: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
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
          NotificationTypesE.SUCCESS,
          NotificationTypesE.WARNING,
          NotificationTypesE.ERROR,
          NotificationTypesE.INFO,
          NotificationTypesE.NEUTRAL,
        ],
      },
    },
    location: {
      control: {
        type: 'select',
        options: [
          NotificationLocationE.TOP_LEFT,
          NotificationLocationE.TOP_RIGHT,
          NotificationLocationE.BOTTOM_LEFT,
          NotificationLocationE.BOTTOM_RIGHT,
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
    category: {
      control: {
        type: 'select',
        options: ['crumb', 'toast'],
      },
    },
    callbackCta: {
      name: 'callbackCta',
      type: { name: 'string' },
    },
  },
} as ComponentMeta<typeof Notification>;

export type NotifcationStoryPropsT = {
  title: string;
  description: string;
  id: string;
  selfDestruct?: (id: string, location: NotificationLocationE) => void;
  callback?: Function;
  callbackCta?: string;
  duration?: number;
  autoClose?: boolean;
  hasIcon?: boolean;
  icon?: IconT;
  type?: NotificationTypesE;
  location?: NotificationLocationE;
  pauseOnHover?: boolean;
  category: 'crumb' | 'toast';
  classProp?: string;
};

const NotifcationStory = ({
  title,
  description,
  id,
  selfDestruct,
  callback,
  callbackCta = 'Confirm',
  duration = 2000,
  autoClose = true,
  hasIcon = false,
  icon,
  type = NotificationTypesE.SUCCESS,
  location = NotificationLocationE.TOP_RIGHT,
  pauseOnHover = true,
  category,
  classProp = '',
}: NotifcationStoryPropsT) => {
  return <></>;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotifcationStory> = (args) => {
  const toastRef = useRef<NotificationInterfaceT>();
  const toastDarkRef = useRef<NotificationInterfaceT>();

  const callback = args.callbackCta ? () => {} : undefined;

  const success: NewNotificationT = {
    title: args.title,
    description: args.description,
    duration: args.duration,
    type: args.type,
    location: args.location,
    pauseOnHover: args.pauseOnHover,
    autoClose: args.autoClose,
    icon: args.icon,
    hasIcon: args.hasIcon,
    callback: callback,
    callbackCta: args.callbackCta,
    category: args.category,
  };

  const handleClick = () => {
    toastRef.current?.dispatchNotification(success);
  };

  const handleDarkClick = () => {
    toastDarkRef.current?.dispatchNotification(success);
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
        <Notification ref={toastRef} />
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
        <Notification ref={toastDarkRef} />
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
  type: NotificationTypesE.SUCCESS,
  location: NotificationLocationE.TOP_RIGHT,
  pauseOnHover: true,
  autoClose: true,
  callbackCta: undefined,
  icon: undefined,
  hasIcon: false,
  category: 'toast',
};
