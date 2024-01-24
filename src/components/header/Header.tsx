import classes from './Header.module.scss';
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider.tsx";

export function Header() {
  const auth = useAuth();

  return (
      <header>
        <div className={classes['header-container']}>
          <Link to="/">
            <h2 className={classes['logo']}>Staff Management System</h2>
          </Link>
          <nav className={classes['actions']}>
            {
              auth.isAuthenticated ?
                  <Link to="#" className='link-button' onClick={auth.onLogout}>Logout</Link>
                  :
                  <Link to="/login" className='link-button'>Login</Link>
            }
          </nav>
        </div>
      </header>
  );
}
