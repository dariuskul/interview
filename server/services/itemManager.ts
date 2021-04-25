import { employees } from '../data';



// Hashmap, stores only most recent updates of the item object. 
let items = new Map();
export const updateItem = (item) => {
  items.has(item.id) ? items.delete(item.id) : null;

  items.set(item.id, item)
};

export const getItems = () => {
  return employees.map((userItem) => {
    const updatedItem = items.get(userItem.id)

    return {
      ...(updatedItem || userItem),
    };
  })
};



