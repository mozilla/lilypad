import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, Button } from '../components';
import '../styles/theme.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  const ModalContent = () => (
    <>
      <h1 className="mb-12">Modal Title</h1>
      <p>Modal Paragraph</p>
    </>
  );

  return (
    <>
      <main style={{ padding: '20px' }}>
        <div id="LP_modal_portal" />
        <h1>How to use</h1>
        <p>
          The modal component admittedly, is a little more complex then all the
          other components you simply import and use. There are a few steps to
          accomplish before you can use the modal component.
        </p>
        <ol>
          <li>
            Place a div with an ID of "LP_modal_portal" in the root of your
            project, preferably at the highest level in the DOM you can go, for
            example under the opening body tag.{' '}
          </li>
          <li>
            Import Modal component to desired React component and fill with any
            element(s) you want. <br />
            Note: the modal component is not opinionated about the general
            layout of the modal you can add any content you would like to the
            modal container.
          </li>
        </ol>
        <p>Click button to show modal.</p>
        <Button
          text="show modal"
          label="show modal"
          onClick={() => setShowModal(true)}
        />
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <ModalContent />
        </Modal>
      </main>
    </>
  );
};

// PRIMARY BUTTON
export const Main = Template.bind({});
Main.args = {};
