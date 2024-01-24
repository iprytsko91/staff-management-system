import { UserModel } from "../../models";

interface SmsState {
  users: UserModel[]
}

export const smsInitialState: SmsState = {
  users: []
}
