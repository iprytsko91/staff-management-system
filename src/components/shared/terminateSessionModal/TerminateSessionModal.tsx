import { Modal } from "../modal/Modal.tsx";
import { CountdownTimer } from "../countdownTimer/CountdownTimer.tsx";
import { useModal, useAuth } from "../../../providers";
import { terminateSessionTimeout } from "../../../utils";

export const TerminateSessionModal = () => {
  const modal = useModal()
  const countdownTimer: number = terminateSessionTimeout;
  const auth = useAuth();

  if (!modal.visible) {
    return null; // Deletes html
  }

  const logout = () => {
    modal.close();
    auth.onLogout();
  }

  const closeAndContinue = () => {
    modal.close();
  }

  return (
      <Modal open={modal.visible}>
        <h2>Session will be terminated in <CountdownTimer initSeconds={countdownTimer} timesOut={logout}/>sec</h2>
        <div className='actions'>
          <button className={`btn`} onClick={logout}>Logout</button>
          <button className={`btn btn-primary`} onClick={closeAndContinue}>Continue</button>
        </div>
      </Modal>
  )
}
