import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Close } from './modal.css';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

import '@reach/dialog/styles.css';

// This component is here only to to showcase the
// React Context integration. No need to keep this if
// you don't require a Modal in your project.
export default class Modal extends PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.props.open && this.props.hideModal();
    }
  };

  disableScrolling(open) {
    // Disables scrolling when the modal is open, as suggested by
    // https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  hideWindow = () => {
    this.props.hideModal()
    this.props.onClose()
  }

  showWindow = (showModal, onClick) => {
    this.props.showModal()
    this.props.onClick()
  }

  render() {
    const { children, open, showModal, hideModal, onClose, styleProps, onClick } = this.props;
    if (typeof document !== 'undefined') {
      this.disableScrolling(open);
    }
    const updateChildrenWithProps = React.Children.map(
      this.props.children,
      (child, i) => {
        return React.cloneElement(child, {
        //this properties are available as a props in child components
          showWindow: this.showWindow
        });
      }
    );

    return (
      <div onClick={this.showWindow} style={{display: 'inline-block'}}>
        <Button
          padding={0}
          onClick={this.showWindow} >
          {this.props.button ? this.props.button : 'Показать полное описание -->' }
        </Button>

        <DialogOverlay onDismiss={this.hideWindow} isOpen={open} onClick={this.hideWindow} >
          <DialogContent style={{width: '70vw', marginTop: '15vh', position: 'relative'}}>
            <>
          <Close onClick={this.hideWindow}>

            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden >×</span>
          </Close>
            {updateChildrenWithProps }
            </>
          </DialogContent>
        </DialogOverlay>
      </div>
    );
  }
}
