import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const PsCalendar = (props) => {
  const { visible, show } = props;

  return (
    <Modal show={visible} fullscreen={'md-down'} onHide={() => show(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body content</p>
        <Button className="me-2" onClick={() => show(false)}>
          Hide
        </Button>

      </Modal.Body>
    </Modal>
  );
};

export default PsCalendar;