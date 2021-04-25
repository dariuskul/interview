import {FC} from 'react';
import { Route, useHistory } from 'react-router';
import { Routes } from '~/constants';
import {IItem} from "~/services/getUserItems";
import logout from '../../../../services/logout';

import './header-style.scss';

interface IHeader {
  items: Array<Array<IItem>>;
  username: string;
}

const Header: FC<IHeader> = ({items, username}) => {
  const history = useHistory();
  const handleLogOut = async() =>{
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
    history.push(Routes.Login)
  }
  let wrongEmails = items[3].length + items[2].length;
  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleLogOut}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${wrongEmails} Emails are wrong or reused`}</h1>
      <span>Email validator to protect your company from bad registrations</span>
    </div>
  )
};

export default Header;
