export const credentials = {
  username: 'admin',
  password: '21232f297a57a5a743894a0e4a801fc3' // MD5 Admin
}

export const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const requiredMessage: string = 'Field is required';
export const emailValidationMessage: string = 'Email address is wrong';

export const passwordMinLength: number = 8;
export const passwordValidationMessage: string = 'Password length should be min 8 characters';
export const idleTimeout: number = 10;
export const terminateSessionTimeout: number = 30;
