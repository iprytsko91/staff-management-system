import { createContext, useContext, useState } from "react";

type ModalContextParams = {
  visible: boolean,
  show: Function,
  close: Function
};

const ModalContext = createContext<ModalContextParams>({
  visible: false,
  show: () => {
  },
  close: () => {
  }
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [visible, setVisible] = useState<boolean>(false);
  const show = () => setVisible(true);
  const close = () => setVisible(false);

  return (
      <ModalContext.Provider value={{ visible, show, close }}>
        {children}
      </ModalContext.Provider>
  )
}
