import { useEffect, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import classes from "./HomePage.module.scss";
import { UserListItem } from "../../shared/userListItem/UserListItem.tsx";
import { UserModel } from "../../shared/models";
import { useModal } from "../../shared/modal/ModalProvider.tsx";
import { Idle } from "../../shared/idle/Idle.tsx";
import { LogoutModal } from "../../shared/modal/logoutModal/LogoutModal.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";
import { useFetch } from "../../hooks/useFetch.ts";

export function HomePage() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const modal = useModal();
  const { data } = useFetch('users.json')

  useEffect(() => {
    setUsers(data)
  }, [data])

  // const [auth, setAuth] = useLocalStorage('auth', 'false')
  // console.log(auth)

  return (
      <>
        {/*<button onClick={() => setAuth('true')}>local storage</button>*/}
        {/*<Idle/>*/}
        {/*<div>*/}
        {/*  Emulation actions*/}
        {/*  <button className={`btn`} onClick={modal.show}>Open Logout Modal</button>*/}
        {/*  <LogoutModal/>*/}
        {/*</div>*/}

        <div className={`${classes['home-header']}`}>
          <h2>All Users ({users?.length})</h2>
          <button className="btn">Add New <BsFillPlusSquareFill style={{ marginLeft: '4px' }}/></button>
        </div>

        {/*//TODO: can be refactored to shared component, or to child component ?*/}
        <div className={classes['users-list']}>
          {users?.map((item, index) => <UserListItem key={index} user={item}/>)}
        </div>
      </>
  );
}
