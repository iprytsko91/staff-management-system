import { UserModel } from "../../models";
import { useModal } from "../../modal/ModalProvider.tsx";
import { useDispatch } from "react-redux";
import { addUsers } from "../../../store/sms";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AddUserModal } from "../../modal/addUserModal/AddUserModal.tsx";

export const AddUserButton = () => {
  const modal = useModal();
  const dispatch = useDispatch()

  const save = (user: UserModel) => {
    dispatch(addUsers([user]));
    modal.close();
  };

  return (
      <>
        <button className='btn' onClick={() => modal.show()}>
          Add New <BsFillPlusSquareFill style={{ marginLeft: '4px', width: '24px', height: '24px' }}/>
        </button>
        <AddUserModal save={save}></AddUserModal>
      </>
  )
}
