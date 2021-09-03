import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "react-day-picker/lib/style.css";

const defs = {
  title: "Confirm",
  body: "Confirmation is neded!",
  buttons: [
    { text: "Cancel", value: false, variant: "secondary" },
    { text: " OK ", value: true, variant: "primary" },
  ],
};

const useAlert = (props) => {
  const { title, body, buttons } = { ...defs, ...props };

  const [visible, setVisible] = useState(false);
  const [ok, setOk] = useState(false);
  const [ okFun, setOkFun ] = useState({ handle: () => {}} );

  const show = (pf) => { 
      setVisible(true);
      if(pf)
        setOkFun({ handle: pf } );
      else
        setOkFun({ handle: () => {}} );  
  };

  const hide = () => { setVisible(false);};

  const onClick = (button) => {
    if( button.function ) button.function();
    if( button.value ) okFun.handle();
    setOk(button?.value);
    setVisible(false);
  };

  const Tag = () => (
    <Modal
      size="sm"
      show={visible}
      fullscreen={"md-down"}
      onHide={() => setVisible(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => onClick(button)}
            variant={button?.variant}
          >
            {button.text}
          </Button>
        ))}
      </Modal.Footer>
    </Modal>
  );

  return { Tag, show, hide, isOk: ok, isCancel: !ok };
};

export default useAlert;
