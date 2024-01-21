import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import './Modal.scss';

export function Modal({ children, open }: { children: any, open: boolean }) {
  const dialog = useRef<HTMLDialogElement>();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
      <dialog ref={dialog}>{children}</dialog>,
      document.getElementById('modal')
  );
}
