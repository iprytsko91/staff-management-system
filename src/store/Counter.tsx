import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store.ts";
import { UserModel } from "../shared/models";
import { addUsers } from "./sms";

export function Counter() {
  const users = useSelector((state: RootState) => state.sms.users)
  const dispatch = useDispatch()

  return (
      <div>
        <div>
          <button
              aria-label="Increment value"
              onClick={() => dispatch(addUsers([{
                id: Math.random().toString(),
                userName: Math.random().toString(),
                firstName: 'ivan',
                lastName: 'prytsko',
                email: 'fs@gmail.com'
              } as UserModel]))}
          >
            Increment
          </button>
          <span>Users {JSON.stringify(users)}</span>
        </div>
      </div>
  )
}
