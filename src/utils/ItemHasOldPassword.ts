import { duration } from "moment";
import { IItem } from "../types/item";

const differenceBetweenDates = (date1, date2) => {
  let diff = duration(date1 - new Date(date2).getTime());
  return diff.asDays();
};

const itemHasOldPassword = (item: IItem, itemList: Array<IItem>) => {
  let today = Date.now();
  const reusedItems = itemList.filter(
    (listItem) => differenceBetweenDates(today, item.createdAt) >= 30
  );
  return reusedItems.length > 1;
};

export default itemHasOldPassword;
