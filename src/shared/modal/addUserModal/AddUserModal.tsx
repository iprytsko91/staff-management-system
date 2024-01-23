import { Modal } from "../modal/Modal.tsx";
import { useModal } from "../ModalProvider.tsx";
import { UserModel } from "../../models";
import { useInput } from "../../../hooks";

type AddUserModalParams = { save: Function }

export const AddUserModal = ({ save }: AddUserModalParams) => {
  const modal = useModal();
  const userName = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');

  if (!modal.visible) {
    return null; // Deletes html
  }

  const getUserModel = () => {
    return {
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    } as UserModel;
  }

  return (
      <Modal open={modal.visible}>
        <h2>Add New User</h2>
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
          <button className={`btn`} onClick={() => modal.close()}>Cancel</button>
          <button className={`btn btn-primary`} onClick={() => save(getUserModel())}>Delete</button>
        </div>
      </Modal>
  );
};
