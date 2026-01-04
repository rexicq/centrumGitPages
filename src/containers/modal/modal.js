import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

const ModalContainer = ({ children, button, styleProps, opened, onClick, showModals, hideModals }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal
        button={button}
        open={typeof opened !== 'undefined' ? opened : open}
        styleProps={styleProps}
        showModal={showModal}
        onClick={showModals}
        hideModal={hideModal}
        onClose={hideModals}
      >
        {children}
      </Modal>
    )}
  </Consumer>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
