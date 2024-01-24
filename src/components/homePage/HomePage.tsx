import { useEffect } from "react";

import classes from "./HomePage.module.scss";
import { UserListItem } from "../userListItem/UserListItem.tsx";
import { ModalProvider } from "../../providers";
import { useFetch } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { addUsers } from "../../store/sms";
import { AddUserButton } from "../userListItem/addUserButton/AddUserButton.tsx";
import { Idle } from "../shared";

export const HomePage = () => {
  const users = useSelector((state: RootState) => state.sms.users)
  const { data } = useFetch('users.json')
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(addUsers(data))
    }
  }, [data])

  return (
      <>
        <Idle/>

        <div className={`${classes['home-header']}`}>
          <h2>All Users ({users?.length})</h2>
          <ModalProvider>
            <AddUserButton/>
          </ModalProvider>
        </div>

        {/*//TODO: better to extract users list to separate component*/}
        {users?.length ?
            <div className={classes['users-list']}>
              {users.map((item, index) => <UserListItem key={index} user={item}/>)}
            </div>
            :
            <div className={classes['no-users']}><h2>There are no users!</h2></div>
        }
      </>
  );
}
