import List from "./components/List/List";
import useItemsProvider from "./useItemsProvider";
import ErrorBlock from "../ErrorBlock";
import Filter from "./components/Filter/Filter";
import LoadingScreen from "../LoadingScreen";
import Header from "./components/Header/Header";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Routes } from "~/constants";
import { useUserContext } from "../UserContext";

const UsersManagement = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    isLoading,
    errorMessage,
    itemsObject,
    setUpdate,
  } = useItemsProvider();

  //Case when server was restarted and user was still logged in, we remove tokens
  if (!userDataIsLoading && username === null) {
    localStorage.clear();
    return <Redirect to={Routes.Login} />;
  }

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen />;
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage} />;
  }

  return (
    <div className="container">
      <Header items={itemsObject} username={username} />
      <Filter items={itemsObject} />
      <Switch>
        <Route exact path={Routes.Users}>
          <List items={itemsObject[0]} update={setUpdate} />
        </Route>
        <Route path={Routes.Weak}>
          <List items={itemsObject[3]} update={setUpdate} />
        </Route>
        <Route path={Routes.Reused}>
          <List items={itemsObject[2]} update={setUpdate} />
        </Route>
        <Route path={Routes.Old}>
          <List items={itemsObject[1]} update={setUpdate} />
        </Route>
      </Switch>
    </div>
  );
};

export default UsersManagement;
