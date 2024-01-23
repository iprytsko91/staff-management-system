import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

import { UserModel } from "../../models";
import classes from './UserListItem.module.scss';

export function UserListItem({ user }: { user: UserModel }) {
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
          <button className='btn btn-circle'><BsFillPencilFill/></button>

          <button className='btn btn-circle'><BsFillTrash3Fill/></button>
        </div>
      </div>
  )
}
