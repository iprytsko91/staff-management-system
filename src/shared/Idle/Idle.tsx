import { ModalProvider } from "../Modal/ModalProvider.tsx";
import { IdleProvider } from "./IdleProvider.tsx";

export function Idle() {
  // TODO: IdleProvider it's just a wrapper, probably useless,
  //  but i need to find a way to access useModal() in the same component.
  return (
      <ModalProvider>
        <IdleProvider/>
      </ModalProvider>
  )
}
