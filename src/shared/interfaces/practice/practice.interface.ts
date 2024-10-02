import { ICompany } from "../company";
import { IUser } from "../user";

export interface IPractice {
  id: number;
  name: string;
  description: string;

  studyCondition: string;
  selectionConditions: string;
  vacanciesCount: number;

  direction: IDirection;

  // avatar: string;

  company: ICompany;

  isOpened: boolean;
}

export interface IPracticeCardProps extends IPractice {}

export interface IDirection {
  name: string;
  id: number;
}

export interface INewFlow {
  comment: string;
  test: string;
  id: number;
}

export interface IFlow {
  id: number;
  user: IUser;
  comment: string;
  test: string;
  practice: IPractice;
  status: "Created" | "Canceled" | "Accepted";
}
