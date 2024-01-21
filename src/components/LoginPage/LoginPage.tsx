import classes from './LoginPage.module.scss';

export function LoginPage() {
  return (
      <div className={`${classes['login-page-container']}`}>
        <h1>Please log in to the system.</h1>

        <form className={`${classes['form']}`}>
          <input type="text"/>
          <input type="password"/>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
  );
}
