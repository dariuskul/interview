import { Roles } from "~/constants";

export interface IItem {
  id?: number;
  name: string;
  role: Roles;
  email: string;
  createdAt: string;
}
