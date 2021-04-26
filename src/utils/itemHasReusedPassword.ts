import {IItem} from "../types/item";

const itemHasReusedPassword = (item: IItem, itemList: Array<IItem>) => {
  const reusedItems = itemList.filter((listItem) => (
    listItem.email.toLowerCase() === item.email.toLowerCase()
  ))

  return reusedItems.length > 1;
};

export default itemHasReusedPassword;
