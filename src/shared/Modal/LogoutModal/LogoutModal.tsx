import classes from "./LogoutModal.module.scss";
import { Modal } from "../Modal/Modal.tsx";
import { CountdownTimer } from "../../CountdownTimer/CountdownTimer.tsx";
import { useModal } from "../ModalProvider.tsx";

export function LogoutModal() {
  const modal = useModal()
  const countdownTimer: number = 30;

  if (!modal.visible) {
    return null; // Deletes html
  }

  const logout = () => {
    modal.close();
  }

  const closeAndContinue = () => {
    modal.close();
  }

  return (
      <Modal open={modal.visible}>
        <h2>Session will be terminated in <CountdownTimer initSeconds={countdownTimer} timesOut={logout}/>sec</h2>
        <div className={classes['actions']}>
          <button className={`btn`} onClick={logout}>Logout</button>
          <button className={`btn btn-primary`} onClick={closeAndContinue}>Continue</button>
        </div>
      </Modal>
  )
}
