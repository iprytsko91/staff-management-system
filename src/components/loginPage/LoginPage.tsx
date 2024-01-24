import classes from './LoginPage.module.scss';
import { useEffect, useRef, useState } from "react";
import { useInput } from "../../hooks/useInput.ts";
import { useAuth } from "../../providers/AuthProvider.tsx";

export function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const rendersCount = useRef(1);
  const prevValue = useRef('');
  const { reset, value, bind } = useInput('');
  const auth = useAuth();

  useEffect(() => {
    // console.log('Render Count Effect')
    // console.log('current count before change', rendersCount)
    // rendersCount.current++
    // console.log('current count after change', rendersCount)
  });

  useEffect(() => {
    // console.log('Preious login', prevValue)
    // prevValue.current = login;
  }, [login]);

  return (
      <div className={`${classes['login-page-container']}`}>
        <h1>Please log in to the system.</h1>
        <h1>renders count {rendersCount.current}</h1>
        <h1>Prev login {prevValue.current}</h1>
        <h1>entered value {value}</h1>
        <button onClick={reset}>clear</button>

        <form className={`${classes['form']}`}>
          <input type="text" {...bind}/>
          <label htmlFor="login"></label>
          <input id="login"
                 type="text"
                 value={login}
                 onChange={(event) => setLogin(event.target.value)}/>
          <label htmlFor="password"></label>
          <input id="password" type="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
          <button className='btn btn-primary' onClick={auth.onLogin}>Login</button>
        </form>
      </div>
  );
}
