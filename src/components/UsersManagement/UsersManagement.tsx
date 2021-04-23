import List from './components/List/List';
import useItemsProvider from './useItemsProvider';
import ErrorBlock from '../ErrorBlock';
import Filter from './components/Filter/Filter';
import LoadingScreen from '../LoadingScreen';
import Header from './components/Header/Header';
import {Route, Switch, useHistory} from "react-router-dom";
import {Routes} from '~/constants';
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import { useUserContext } from '../UserContext';
import Login from '../Login/Login';
import itemHasOldPassword from '~/utils/ItemHasOldPassword';

const UsersManagement = () => {
  const history = useHistory();
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    isLoading,
    errorMessage,
    itemsObject
  } = useItemsProvider();

  //Case when server was restarted and user was still logged in, we remove tokens
  if(!userDataIsLoading && username === null){
    localStorage.clear();
    history.push(Routes.Login)
    return <Login/>
  }
  
  if (isLoading || userDataIsLoading) {
    return <LoadingScreen/>
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage}/>
  }

  return (
    <div className="container">
      <Header items={itemsObject} username={username} />
      <Filter items={itemsObject}/>
      <Switch>
        <Route exact path={Routes.Users}>
          <List items={itemsObject[0]}/>
        </Route>
        <Route path={Routes.Weak}>
          <List items={itemsObject[3]}/>
        </Route>
        <Route path={Routes.Reused}>
          <List items={itemsObject[2]}/>
        </Route>
        <Route path={Routes.Old}>
          <List items={itemsObject[1]} />
        </Route>
      </Switch>
    </div>
  );
};

export default UsersManagement;
