import classes from './UserListItem.module.scss';
import { UserModel } from "../../models";
import { ModalProvider } from "../../providers";
import { DeleteUserButton } from "./deleteUserButton/DeleteUserButton.tsx";
import { EditUserButton } from "./editUserButton/EditUserButton.tsx";

export const UserListItem = ({ user }: { user: UserModel }) => {
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
          {/*// TODO: should be a cleanest way to open modals*/}
          <ModalProvider>
            <EditUserButton user={user}/>
          </ModalProvider>
          <ModalProvider>
            <DeleteUserButton user={user}/>
          </ModalProvider>
        </div>
      </div>
  )
}
