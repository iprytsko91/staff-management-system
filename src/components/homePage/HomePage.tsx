import { useEffect } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import classes from "./HomePage.module.scss";
import { UserListItem } from "../../shared/userListItem/UserListItem.tsx";
import { useModal } from "../../shared/modal/ModalProvider.tsx";
import { useFetch } from "../../hooks/useFetch.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { addUsers } from "../../store/sms";
import { UserModel } from "../../shared/models";

export function HomePage() {
  const users = useSelector((state: RootState) => state.sms.users)
  const modal = useModal();
  const { data } = useFetch('users.json')
  const dispatch = useDispatch()


  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch(addUsers(data))
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
          <button className="btn" onClick={() => dispatch(addUsers([
            {
              id: Math.random().toString(),
              userName: Math.random().toString(),
              firstName: 'ivan',
              lastName: 'prytsko',
              email: 'fs@gmail.com'
            } as UserModel
          ]))}>
            Add New <BsFillPlusSquareFill style={{ marginLeft: '4px', width: '24px', height: '24px' }}/>
          </button>
        </div>

        {/*//TODO: can be refactored to shared component, or to child component ?*/}
        <div className={classes['users-list']}>
          {users?.map((item, index) => <UserListItem key={index} user={item}/>)}
        </div>
      </>
  );
}
