import classes from "./HomePage.module.scss";
import { UserListItem } from "../../shared/components/UserListItem/UserListItem.tsx";
import { UsersList } from "../../shared/models/users-list.ts";
import { LogoutModal } from "../../shared/components";
import { useState } from "react";

export function HomePage() {

  const [logoutModal, setLogoutModal] = useState();

  function openLogoutModal() {
    setLogoutModal(true);
  }

  return (
      <>
        <div>
          Emulation actions
          <button className={`btn`} onClick={openLogoutModal}>Open Logout Modal</button>
        </div>

        <h2>All Users ({UsersList.length})</h2>

        {/*//TODO: can be refactored to shared component, or to child component ?*/}
        <div className={classes['users-list']}>
          {UsersList.map((item, index) => <UserListItem key={index} user={item}/>)}
        </div>

        <LogoutModal open={logoutModal}/>
      </>
  );
}
