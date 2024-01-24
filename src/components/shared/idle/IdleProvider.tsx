import { useBnIdle } from "use-bn-idle";
import { createContext, useEffect } from "react";

import { useModal } from "../../../providers";
import { TerminateSessionModal } from "../index.ts";
import { idleTimeout } from "../../../utils";

const IdleContext = createContext(null);

export const IdleProvider = () => {
  const modal = useModal();
  const [startTimer, stopTimer] = useBnIdle(() => {
    modal.show();
  })

  useEffect(() => {
    startTimer(idleTimeout);

    return () => {
      stopTimer(0);
    }
  }, [modal.visible]);

  return (
      <IdleContext.Provider value={null}>
        <TerminateSessionModal/>
      </IdleContext.Provider>
  );
}
