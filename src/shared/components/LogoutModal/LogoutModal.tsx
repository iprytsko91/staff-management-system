import { useRef } from "react";

import classes from './LogoutModal.module.scss';
import { Modal } from "../Modal/Modal.tsx";

export function LogoutModal({ open }: { open: boolean }) {
  const modal = useRef()

  // todo: how to close by itself
  return (
      <Modal open={open}>
        <h2>Session will be terminated in 30sec</h2>
        <button >X</button>
        <div className={classes['actions']}>
          <button className={`btn`}>Logout</button>
          <button className={`btn btn-primary`}>Continue</button>
        </div>
      </Modal>
  )
}
