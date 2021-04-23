import {IItem} from "~/services/getUserItems";

const itemHasWeakPassword = (item: IItem, itemList: Array<IItem>) => {
  const weahPasswords = itemList.filter((listItem) => (
    !item.email.match(/^[^\s@]+@[^\s@]+.[^\s@]+$/)
  ))

  return weahPasswords.length > 1;
};

export default itemHasWeakPassword;
