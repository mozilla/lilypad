import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
import {
  Crumb,
  CrumbInterfaceT,
  NewCrumbT,
  CrumbTypesE,
  CrumbLocationE,
} from '../components';
import CrumbMessage from '../components/Crumb/CrumbMessage';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Crumb',
  component: Crumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
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
          CrumbTypesE.NEUTRAL,
          CrumbTypesE.SUCCESS,
          CrumbTypesE.WARNING,
          CrumbTypesE.ERROR,
          CrumbTypesE.INFO,
        ],
      },
    },
    location: {
      control: {
        type: 'select',
        options: [
          CrumbLocationE.TOP_LEFT,
          CrumbLocationE.TOP_RIGHT,
          CrumbLocationE.BOTTOM_LEFT,
          CrumbLocationE.BOTTOM_RIGHT,
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
} as ComponentMeta<typeof Crumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CrumbMessage> = (args) => {
  const crumbRef = useRef<CrumbInterfaceT>();
  const crumbDarkRef = useRef<CrumbInterfaceT>();

  const success: NewCrumbT = {
    description: args.description,
    duration: args.duration,
    icon: args.icon,
    hasIcon: args.hasIcon,
    type: args.type,
    location: args.location,
    pauseOnHover: args.pauseOnHover,
    autoClose: args.autoClose,
  };

  const handleClick = () => {
    crumbRef.current?.dispatchCrumb(success);
  };

  const handleDarkClick = () => {
    crumbDarkRef.current?.dispatchCrumb(success);
  };

  return (
    <>
      <main data-theme="light" style={{ padding: '20px' }}>
        <h3>Light Theme</h3>
        <Button
          label="crumb button"
          text="Dispatch Crumb"
          onClick={handleClick}
        />
        <Crumb ref={crumbRef} />
      </main>

      <main
        data-theme="dark"
        style={{ background: '#000000', padding: '20px' }}
      >
        <h3 style={{ color: '#ffffff' }}>Dark Theme</h3>
        <Button
          label="crumb button"
          text="Dispatch Crumb"
          onClick={handleDarkClick}
        />
        <Crumb ref={crumbDarkRef} />
      </main>
    </>
  );
};

// PRIMARY BUTTON
export const Main = Template.bind({});
Main.args = {
  classProp: '',
  description: 'You are beautiful',
  icon: undefined,
  hasIcon: false,
  duration: 3000,
  type: CrumbTypesE.INFO,
  location: CrumbLocationE.TOP_RIGHT,
  pauseOnHover: true,
  autoClose: true,
};
