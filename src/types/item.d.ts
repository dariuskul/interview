import { Roles } from "~/constants";

export interface IItem {
  id?: number;
  name: string;
  role: Roles;
  email: string;
  createdAt: string;
}
interface IList {
  items: Array<IItem>;
  update?: React.Dispatch<any>;
}

interface IUpdateModal {
  item: IItem;
  update?: React.Dispatch<any>;
}
