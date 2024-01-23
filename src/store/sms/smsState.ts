import { UserModel } from "../../shared/models";

interface SmsState {
  users: UserModel[]
}

export const smsInitialState: SmsState = {
  users: []
}
