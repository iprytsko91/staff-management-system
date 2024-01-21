export class UserModel {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  // password: string; //TODO:??
  // passcode: string; //TODO:??

  constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}




