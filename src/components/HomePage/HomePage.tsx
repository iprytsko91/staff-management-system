import classes from "./HomePage.module.scss";
import { UserListItem } from "../../shared/components/UserListItem/UserListItem.tsx";
import { UsersList } from "../../shared/models/users-list.ts";

export function HomePage() {
  return (
      <>
        <h2>All Users ({UsersList.length})</h2>

        <div className={classes['users-list']}>
          {UsersList.map((item, index) => <UserListItem key={index} user={item}/>)}
        </div>
      </>
  );
}
