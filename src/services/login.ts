import {API} from '~/constants';
import getUrl from '../utils/getUrl';

const login = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);
  if(response.status > 400){
    throw new Error('Credentials invalid')
  }
  const data = await response.json();
  const { token } = data;

  localStorage.setItem('token', token);
};

export default login;
