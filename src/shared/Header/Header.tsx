import classes from './Header.module.scss';
import { Link } from "react-router-dom";

export function Header() {
  return (
      <header>
        <div className={classes['header-container']}>
          <Link to="/">
            <h2 className={classes['logo']}>Staff Management System</h2>
          </Link>
          <nav className={classes['actions']}>
            <Link to="/login" className='link-button'>Login</Link>
            {/*<Link to="/" className='link-button'>Logout</Link>*/}
          </nav>
        </div>
      </header>
  );
}
