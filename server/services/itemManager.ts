import { employees } from '../data';

let items = [];

export const updateItem = (item) => {
  items.map((userItem)=>{
    userItem.id === item.id ? items.splice(items.indexOf(item)) : '';
  })
  items.push(item);
};

export const getItems = () => {
  console.log(items)
  return employees.map((userItem) => {
    const updatedItem = items.find(({ id }) => id === userItem.id);

    return {
      ...(updatedItem || userItem),
    };
  })
};



