import { Roles } from "../../constants";
import { IItem } from "../../types/item";
import itemHasWeakPassword from "../itemHasWeakPassword";

const items: Array<IItem> = [
  {
    name: "discord",
    role: Roles.read,
    email: "testetagmail.com",
    createdAt: null,
  },
  {
    name: "airdroid",
    email: "testates.com",
    role: Roles.read,
    createdAt: null,
  },
  {
    name: "Nintendo",
    email: "test@gmail.com",
    role: Roles.read,
    createdAt: null,
  },
];

test("should return true if the password is weak", () => {
  expect(itemHasWeakPassword(items[0], items)).toBe(true);
  expect(itemHasWeakPassword(items[1], items)).toBe(true);
  expect(itemHasWeakPassword(items[2], items)).toBe(false);
});
