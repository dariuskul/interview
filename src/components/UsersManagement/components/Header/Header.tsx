import { FC } from "react";
import { useHistory } from "react-router";
import { Routes } from "~/constants";
import { IItem } from "~/types/item";
import logout from "../../../../services/logout";

import "./header-style.scss";

interface IHeader {
  items: Array<Array<IItem>>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
    history.push(Routes.Login);
  };

  const formatHeader = (count: number): JSX.Element => {
    if (count === 0) {
      return <h1>Your users are using correct emails.</h1>;
    }

    if (count === 1) {
      return <h1>{count} email is wrong or reused</h1>;
    }
    return <h1>{count} emails are wrong or reused</h1>;
  };

  let wrongEmails = items[3].length + items[2].length; // WRONG + REUSED Emails. Not including Old.
  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleLogOut}>{`Logout ${username}`}</button>
      </div>
      {formatHeader(wrongEmails)}
      <span>
        Email validator to protect your company from bad registrations
      </span>
    </div>
  );
};

export default Header;
