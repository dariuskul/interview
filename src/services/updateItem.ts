import { API } from "~/constants";
import getUrl from "~/utils/getUrl";
import { IItem } from "~/types/item";
import { updateRequest } from "~/api";

const updateItem = async (item: IItem) => {
  const response = await updateRequest(item);

  return response;
};

export default updateItem;
