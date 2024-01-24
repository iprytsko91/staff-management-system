import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

interface ModalProps {
  children: any,
  open: boolean
}

export const Modal = ({ children, open }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    dialog.current.close();
  }

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      closeModal();
    }
  }, [open]);

  return createPortal(
      <dialog ref={dialog} onCancel={(event) => event.preventDefault()}>{children}</dialog>,
      document.getElementById('modal')
  );
}
