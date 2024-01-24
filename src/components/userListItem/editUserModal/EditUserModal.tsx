import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

import { Modal } from "../../shared";
import { useModal } from "../../../providers";
import { UserModel } from "../../../models";
import {
  emailRegex,
  emailValidationMessage,
  passwordMinLength,
  passwordValidationMessage,
  requiredMessage
} from "../../../utils";

interface EditUserModalParams {
  user?: UserModel,
  saved: Function
}

export const EditUserModal = ({ user, saved }: EditUserModalParams) => {
  const modal = useModal();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserModel>()

  useEffect(() => {
    if (user) {
      setValue('userName', user.userName)
      setValue('firstName', user.firstName)
      setValue('lastName', user.lastName)
      setValue('email', user.email)
      setValue('password', user.password)
    }
  }, [modal.visible]);

  if (!modal.visible) {
    return null; // Deletes html
  }

  const getUserModel = () => {
    return {
      ...getValues(),
      id: user?.id ?? uuidv4(),
    } as UserModel;
  }

  const cancel = () => {
    reset();
    modal.close();
  }

  const onSubmit: SubmitHandler<UserModel> = () => {
    saved(getUserModel());
    reset();
  }

  // TODO: Good to extract errors to component, so as form-controls
  // TODO: Good to define fields validations to the code
  return (
      <Modal open={modal.visible}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{user ? 'Update User' : 'Add New User'}</h2>
          <div className="modal-body">
            <div className="form-control-group">
              <div className="form-control">
                <label htmlFor="user-name">Username</label>
                <input id="user-name"
                       type="text"
                       className={errors.userName && 'invalid'}
                       {...register('userName', {
                         required: requiredMessage,
                       })}/>
                {errors.userName && <span className='error'>{errors.userName.message}</span>}
              </div>
              <div className="form-control">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name"
                       type="text"
                       className={errors.firstName && 'invalid'}
                       {...register('firstName', {
                         required: requiredMessage,
                       })}/>
                {errors.firstName && <span className='error'>{errors.firstName.message}</span>}
              </div>
              <div className="form-control">
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name"
                       type="text"
                       className={errors.lastName && 'invalid'}
                       {...register('lastName', {
                         required: requiredMessage,
                       })}/>
                {errors.lastName && <span className='error'>{errors.lastName.message}</span>}
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input id="email"
                       type="text"
                       className={errors.email && 'invalid'}
                       {...register('email', {
                         required: requiredMessage,
                         pattern: {
                           value: emailRegex,
                           message: emailValidationMessage
                         }
                       })}/>
                {errors.email && <span className='error'>{errors.email.message}</span>}
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input id="password"
                       type="text"
                       className={errors.password && 'invalid'}
                       {...register('password', {
                         required: requiredMessage,
                         minLength: {
                           value: passwordMinLength,
                           message: passwordValidationMessage
                         }
                       })}/>
                {errors.password && <span className='error'>{errors.password.message}</span>}
              </div>
            </div>
          </div>

          <div className="actions">
            <button className={`btn`} onClick={cancel}>Cancel
            </button>
            <button className={`btn btn-primary`} type="submit">{user ? 'Update' : 'Add'}</button>
          </div>
        </form>
      </Modal>
  );
};
