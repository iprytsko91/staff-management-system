import { createContext, useContext, useState } from "react";

interface ModalContextParams {
  visible: boolean,
  show: Function,
  close: Function
}

const ModalContext = createContext<ModalContextParams>({
  visible: false,
  show: () => {
  },
  close: () => {
  }
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const show = () => setVisible(true);
  const close = () => setVisible(false);

  return (
      <ModalContext.Provider value={{ visible, show, close }}>
        {children}
      </ModalContext.Provider>
  )
}
