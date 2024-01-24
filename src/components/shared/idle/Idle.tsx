import { ModalProvider } from "../../../providers";
import { IdleProvider } from "./IdleProvider.tsx";

export const Idle = () => {
  // Tried to encapsulate idle functional in one place, but haven't find better solution. Not it looks weird :/
  // TODO: IdleProvider it's just a wrapper, probably useless,
  //  but i need to find a way to access useModal() in the same component.
  return (
      <ModalProvider>
        <IdleProvider/>
      </ModalProvider>
  )
}
