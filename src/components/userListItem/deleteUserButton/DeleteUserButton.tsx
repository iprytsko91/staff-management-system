import { useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";

import { UserModel } from "../../../models";
import { useModal } from "../../../providers";
import { deleteUser } from "../../../store/sms";
import { DeleteConfirmModal } from "../deleteConfirmModal/DeleteConfirmModal.tsx";

export const DeleteUserButton = ({ user }: { user: UserModel }) => {
  const modal = useModal();
  const dispatch = useDispatch()

  const deleteConfirmed = (user: UserModel) => {
    dispatch(deleteUser(user));
    modal.close();
  };

  return (
      <>
        <button className='btn btn-circle' onClick={() => modal.show()}><BsFillTrash3Fill/></button>
        <DeleteConfirmModal user={user} deleteConfirmed={deleteConfirmed.bind(null, user)}></DeleteConfirmModal>
      </>
  )
}
