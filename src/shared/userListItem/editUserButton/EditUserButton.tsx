import { UserModel } from "../../models";
import { useModal } from "../../modal/ModalProvider.tsx";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/sms";
import { BsFillPencilFill } from "react-icons/bs";
import { EditUserModal } from "../../modal/editUserModal/EditUserModal.tsx";

export const EditUserButton = ({ user }) => {
  const modal = useModal();
  const dispatch = useDispatch()

  const save = (user: UserModel) => {
    dispatch(updateUser(user));
    modal.close();
  };

  return (
      <>
        <button className='btn btn-circle' onClick={() => modal.show()}><BsFillPencilFill/></button>
        <EditUserModal user={user} saved={save}></EditUserModal>
      </>
  )
}
