import { createContext, useContext, useEffect, useState } from "react";
import { getUserInfo } from "~/api";
import { useIsMounted } from "~/helpers/useIsMounted";

const UserContext = createContext<IUser>({
  getUserData: () => {},
  deleteData: () => {},
  errorMessage: null,
  isLoading: true,
  username: null,
  email: null,
  id: null,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [id, setId] = useState<string>(null);
  const isMounted = useIsMounted();

  const getUserData = async () => {
    setErrorMessage(null);
    setIsLoading(true);
    try {
      const data = await getUserInfo();
      setUsername(data?.username);
      setEmail(data?.email);
      setId(data?.id);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  const deleteData = () => {
    setErrorMessage(null);
    setIsLoading(false);
    setUsername(null);
    setEmail(null);
    setId(null);
  };

  useEffect(() => {
    if (isMounted) getUserData();
  }, []);

  const value = {
    getUserData,
    deleteData,
    errorMessage,
    isLoading,
    username,
    email,
    id,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
