import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import classes from './UserListItem.module.scss';
import { UserModel } from "../models";
import { deleteUser, updateUser } from "../../store/sms";
import { ModalProvider, useModal } from "../modal/ModalProvider.tsx";
import { DeleteUserButton } from "./deleteUserButton/DeleteUserButton.tsx";

export function UserListItem({ user }: { user: UserModel }) {
  const dispatch = useDispatch();
  const modal = useModal();

  const deleteCurrentUser = (user: UserModel) => {
    modal.show();
    dispatch(deleteUser(user));
  };

  // TODO: good to separate by `content` component
  return (
      <div className={classes['user-list-item-container']}>
        <div className={`${classes['content-block']}`}>
          <div className={`${classes['content']} ${classes['username']}`}>
            <span className={classes['label']}>Username:</span>
            <span className={classes['value']}>{user.userName}</span>
          </div>
          <div className={`${classes['content']} ${classes['name']}`}>
            <span className={classes['label']}>Name:</span>
            <span className={classes['value']}>{user.firstName}</span>
            <span className={classes['value']}>{user.lastName}</span>
          </div>
          <div className={`${classes['content']} ${classes['email']}`}>
            <span className={classes['label']}>Email:</span>
            <span className={classes['value']}>{user.email}</span>
          </div>
        </div>

        <div className={classes['actions-block']}>
          {/*// TODO: edit in modal or expand?*/}
          <button className='btn btn-circle' onClick={() => dispatch(updateUser(user))}><BsFillPencilFill/></button>
          {/*// TODO: should be a cleanest way to open confirmation modals*/}
          <ModalProvider>
            <DeleteUserButton user={user}></DeleteUserButton>
          </ModalProvider>
        </div>
      </div>
  )
}
