import { fetchItemsRequest } from "~/api/index";

const getUserItems = (userId?: string) => {
  return fetchItemsRequest(userId);
};

export default getUserItems;
