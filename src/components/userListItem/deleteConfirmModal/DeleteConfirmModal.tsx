import { Modal } from "../../shared";
import { useModal } from "../../../providers";
import { UserModel } from "../../../models";

interface DeleteConfirmModalParams {
  user: UserModel,
  deleteConfirmed: Function
}

export const DeleteConfirmModal = ({ user, deleteConfirmed }: DeleteConfirmModalParams) => {
  const modal = useModal();

  if (!modal.visible) {
    return null; // Deletes html
  }

  return (
      <Modal open={modal.visible}>
        <h2>Delete Confirmation</h2>
        <div className="modal-body">
          <p>Are you sure want to delete the <strong>{user.userName}</strong></p>
        </div>
        <div className='actions'>
          <button className={`btn`} onClick={() => modal.close()}>Cancel</button>
          <button className={`btn btn-primary`} onClick={() => deleteConfirmed()}>Delete</button>
        </div>
      </Modal>
  );
};
