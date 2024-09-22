import Password from "antd/es/input/Password";

export interface IUser {
  readonly id: number;

  name: string;

  surname?: string;

  lastname?: string;

  university?: string;

  specialization?: string;

  course?: number;

  email: string;

  company: { id: number };

  phone: string;

  role: "student" | "company";
}

export interface ILoginUser {
  login: string;
  password: string;
}

// export interface IUserRegisterData extends IUser {}

// export interface IRegisterResponse extends Omit<IUser, "role_id"> {
//   id: number;
// }

// export type TLoginData = Pick<IUser, "email"|"password">

// export interface IResponse {
//   accessToken: string;
// }
