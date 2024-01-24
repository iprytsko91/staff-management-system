import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import classes from './LoginPage.module.scss';
import { useAuth } from "../../providers";
import { LoginModel } from "../../models";
import { requiredMessage } from "../../utils";

export const LoginPage = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<LoginModel>()

  useEffect(() => {
    if (auth.isLoginFailed) {
      setError('userName', {});
      setError('password', {});
    }
  }, [auth.isLoginFailed]);

  const onSubmit: SubmitHandler<LoginModel> = () => {
    const credentials = getValues()
    auth.onLogin(credentials.userName, credentials.password);
  }

  return (
      <div className={`${classes['login-page-container']}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Please log in to the system.</h1>
          <div className="form-control-group">
            <div className="form-control">
              <label htmlFor="user-name">User Name</label>
              <input id="user-name"
                     type="text"
                     className={errors.userName && 'invalid'}
                     {...register('userName', {
                       required: requiredMessage,
                     })}/>
              {errors.userName && <span className='error'>{errors.userName?.message}</span>}
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input id="password"
                     type="password"
                     className={errors.password && 'invalid'}
                     {...register('password', {
                       required: requiredMessage,
                     })}/>
              {errors.password && <span className='error'>{errors.userName?.message}</span>}
            </div>
          </div>
          {auth.isLoginFailed && <p>Incorrect Credentials</p>}
          <button className={`btn btn-primary ${classes['login-btn']}`} type="submit">Login</button>
        </form>
      </div>
  );
}
