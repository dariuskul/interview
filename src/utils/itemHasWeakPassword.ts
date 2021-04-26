import {IItem} from "../types/item";

const itemHasWeakPassword = (item: IItem, itemList: Array<IItem>) => {
  const weakPasswords = itemList.filter((listItem) => (
    !item.email.match(/^[^\s@]+@[^\s@]+.[^\s@]+$/)
  ))

  return weakPasswords.length > 1;
};

export default itemHasWeakPassword;
