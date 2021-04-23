import {useEffect, useState} from 'react';
import itemHasOldPassword from '~/utils/ItemHasOldPassword';
import itemHasReusedPassword from '~/utils/itemHasReusedPassword';
import itemHasWeakPassword from '~/utils/itemHasWeakPassword';
import getUserItems, {IItem} from '../../services/getUserItems';

const userItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([])

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const userItems = await getUserItems();

        setItems(userItems);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    })()
  }, []);


  const reusedItems = items.filter((item) => itemHasReusedPassword(item,items))

  const oldItems = items.filter((item) => itemHasOldPassword(item,items))
  const weakPasswords = items.filter((item) => itemHasWeakPassword(item,items))


  return {
    isLoading,
    errorMessage,
    itemsObject: [items,oldItems,reusedItems,weakPasswords],
  }
};

export default userItemsProvider;
