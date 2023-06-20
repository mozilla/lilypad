import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
import {
  Notification,
  NotificationInterfaceT,
  NewNotificationT,
  NotificationTypesT,
  NotificationLocationT,
  IconT,
  CategoryT,
} from '../components';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Notification',
  component: Notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      name: 'Title (Toast Only)',
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
      name: 'Has Icon (crumb only)',
      control: {
        type: 'boolean',
        options: [false, true],
      },
    },
    icon: {
      name: 'Icon (crumb only)',
      control: {
        type: 'select',
        options: ['', 'check', 'check-circle', 'x', 'alert-circle', 'smile'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [, 'neutral', 'success', 'error', 'info', 'warning'],
      },
    },
    location: {
      control: {
        type: 'select',
        options: [
          'top_center',
          'top_right',
          'top_left',
          'bottom_center',
          'bottom_right',
          'bottom_left',
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
  selfDestruct?: (id: string, location: NotificationLocationT) => void;
  callback?: Function;
  callbackCta?: string;
  duration?: number;
  autoClose?: boolean;
  hasIcon?: boolean;
  icon?: IconT;
  type?: NotificationTypesT;
  location?: NotificationLocationT;
  pauseOnHover?: boolean;
  category: CategoryT;
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
  type = 'success',
  location = 'top_right',
  pauseOnHover = true,
  category,
  classProp = '',
}: NotifcationStoryPropsT) => {
  return <></>;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotifcationStory> = (args) => {
  const notificationRef = useRef<NotificationInterfaceT>();
  const notificationDarkRef = useRef<NotificationInterfaceT>();

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
    notificationRef.current?.dispatchNotification(success);
  };

  const handleDarkClick = () => {
    notificationDarkRef.current?.dispatchNotification(success);
  };

  return (
    <>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <Button
          label="notification button"
          text="Dispatch Notification"
          onClick={handleClick}
        />
        <Notification ref={notificationRef} />
      </main>

      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <Button
          label="notification button"
          text="Dispatch Notification"
          onClick={handleDarkClick}
        />
        <Notification ref={notificationDarkRef} />
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
  type: 'success',
  location: 'top_right',
  pauseOnHover: true,
  autoClose: true,
  callbackCta: undefined,
  icon: undefined,
  hasIcon: false,
  category: 'toast',
};
