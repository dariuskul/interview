import { IItem, Roles } from '~/services/getUserItems';
import itemHasReusedPassword from '../itemHasReusedPassword';

const items: Array<IItem> = [
   {
      "name": "discord",
      "role": Roles.read,
      "email": "test@test.com",
      "createdAt": null
   },
   {
      "name": "airdroid",
      "email": "test@test.com",
      "role":  Roles.read,
      "createdAt": null
   },
   {
      "name": "Nintendo",
      "email": "test2@test.com",
      "role": Roles.read,
      "createdAt": null
   }
]

test('should return true if there is more than one item with same password', () => {
   expect(itemHasReusedPassword(items[0], items)).toBe(false);
   expect(itemHasReusedPassword(items[2], items)).toBe(true);
});