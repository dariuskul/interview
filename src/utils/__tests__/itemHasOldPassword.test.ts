import { Roles } from "../../constants";
import { IItem } from "../../types/item";
import itemHasOldPassword from "../ItemHasOldPassword";

const items: Array<IItem> = [
  {
    name: "discord",
    role: Roles.read,
    email: "test@test.com",
    createdAt: new Date().toISOString(),
  },
  {
    name: "Petras Petraitis",
    role: Roles.read,
    email: "test@test.com",
    createdAt: new Date(
      new Date().setMonth(new Date().getMonth() - 2)
    ).toISOString(),
  },
  {
    name: "Nintendo",
    email: "test2@test.com",
    role: Roles.read,
    createdAt: new Date().toISOString(),
  },
  {
    name: "Kestas",
    email: "test1@test.com",
    role: Roles.read,
    createdAt: new Date(
      new Date().setMonth(new Date().getMonth() - 10)
    ).toISOString(),
  },
];

test("should return true if the email is old", () => {
  expect(itemHasOldPassword(items[1], items)).toBe(true);
  expect(itemHasOldPassword(items[0], items)).toBe(false);
  expect(itemHasOldPassword(items[2], items)).toBe(false);
  expect(itemHasOldPassword(items[3], items)).toBe(true);
});
