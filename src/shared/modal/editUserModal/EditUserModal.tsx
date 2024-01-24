import { Modal } from "../modal/Modal.tsx";
import { useModal } from "../ModalProvider.tsx";
import { UserModel } from "../../models";
import { useInput } from "../../../hooks";
import { v4 as uuidv4 } from 'uuid';

type EditUserModalParams = { user?: UserModel, saved: Function }

export const EditUserModal = ({ user, saved }: EditUserModalParams) => {
  const modal = useModal();
  const userName = useInput(user?.userName ?? '');
  const firstName = useInput(user?.firstName ?? '');
  const lastName = useInput(user?.lastName ?? '');
  const email = useInput(user?.email ?? '');
  console.log('renders', userName)

  if (!modal.visible) {
    return null; // Deletes html
  }

  const resetForm = () => {
    userName.reset();
    firstName.reset();
    lastName.reset();
    email.reset();
  }

  const getUserModel = () => {
    console.log('getModel')
    return {
      id: user?.id ?? uuidv4(),
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    } as UserModel;
  }

  const cancel = () => {
    resetForm();
    modal.close();
  }

  const save = () => {
    // TODO: issue, after update, I see previous values
    saved(getUserModel());
    resetForm();
  }

  return (
      <Modal open={modal.visible}>
        <h2>{user ? 'Update User' : 'Add New User'}</h2>
        <div className="modal-body">
          <div className="form-control-group">
            <div className="form-control">
              <label htmlFor="user-name">Username</label>
              <input id="user-name" type="text" {...userName.bind}/>
            </div>
            <div className="form-control">
              <label htmlFor="first-name">FirstName</label>
              <input id="first-name" type="text" {...firstName.bind}/>
            </div>
            <div className="form-control">
              <label htmlFor="last-name">LastName</label>
              <input id="last-name" type="text" {...lastName.bind}/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...email.bind}/>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className={`btn`} onClick={cancel}>Cancel
          </button>
          <button className={`btn btn-primary`} onClick={save}>{user ? 'Update' : 'Add'}</button>
        </div>
      </Modal>
  );
};
