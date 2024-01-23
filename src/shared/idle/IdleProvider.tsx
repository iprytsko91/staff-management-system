import { useBnIdle } from "use-bn-idle";
import { createContext, useEffect } from "react";
import { useModal } from "../modal/ModalProvider.tsx";
import { LogoutModal } from "../modal/logoutModal/LogoutModal.tsx";

const IdleContext = createContext(null);

export function IdleProvider() {
  const [startTimer, stopTimer] = useBnIdle(() => {
    modal.show();
    //TODO: restart timer
  })
  const modal = useModal();

  useEffect(() => {
    startTimer(3);

    return () => {
      console.log('cleaning idle') // TODO: why it runs at first time?
      stopTimer(0);
    }
  }, [modal.visible]);

  return (
      <IdleContext.Provider value={null}>
        <LogoutModal/>
      </IdleContext.Provider>
  );
}
