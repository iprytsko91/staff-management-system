import classes from "./HomePage.module.scss";
import { UserListItem } from "../../shared/UserListItem/UserListItem.tsx";
import { useEffect, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { UserModel } from "../../shared/models";
import { useModal } from "../../shared/Modal/ModalProvider.tsx";
import { Idle } from "../../shared/Idle/Idle.tsx";
import { LogoutModal } from "../../shared/Modal/LogoutModal/LogoutModal.tsx";

export function HomePage() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const modal = useModal();
  const getUsers = () => {
    fetch('users.json')
        .then(res => res.json())
        .then(res => setUsers(res))
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
      <>
        <Idle/>
        <div>
          Emulation actions
          <button className={`btn`} onClick={modal.show}>Open Logout Modal</button>
          <LogoutModal/>
        </div>

        <div className={`${classes['home-header']}`}>
          <h2>All Users ({users.length})</h2>
          <button className="btn">Add New <BsFillPlusSquareFill style={{ marginLeft: '4px' }}/></button>
        </div>

        {/*//TODO: can be refactored to shared component, or to child component ?*/}
        <div className={classes['users-list']}>
          {users.map((item, index) => <UserListItem key={index} user={item}/>)}
        </div>
      </>
  );
}
