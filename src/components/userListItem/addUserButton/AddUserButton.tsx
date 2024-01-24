import { useDispatch } from "react-redux";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { UserModel } from "../../../models";
import { useModal } from "../../../providers";
import { addUsers } from "../../../store/sms";
import { EditUserModal } from "../editUserModal/EditUserModal.tsx";

export const AddUserButton = () => {
  const modal = useModal();
  const dispatch = useDispatch()

  const saved = (user: UserModel) => {
    dispatch(addUsers([user]));
    modal.close();
  };

  return (
      <>
        <button className='btn' onClick={() => modal.show()}>
          {/*// TODO: styles should be in class, made on quick hand*/}
          Add New <BsFillPlusSquareFill style={{ marginLeft: '4px', width: '24px', height: '24px' }}/>
        </button>
        <EditUserModal saved={saved}></EditUserModal>
      </>
  )
}
