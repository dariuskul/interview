import {SyntheticEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Routes} from '~/constants';
import login from '~/services/login';
import ErrorBlock from '../ErrorBlock';

import './login-style.scss';

const Login = () => {
  const {push} = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [validForm,setValidForm] = useState({errors: []});



const handleValidation = () => {
  let user = username;
  let pass = password;
  let errors = [];
  let isValid = true;
  if(!user){
    errors.push("Username cannot be empty");
    isValid = false;
  }
  if(!pass){
    errors.push("Password cannot be empty");
    isValid = false;
  }
  setValidForm({errors: errors})

  return isValid;

}

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    try {  
      if(handleValidation()){
        await login(username, password);
        push(Routes.Users);
      }

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">
          Mygom.tech
        </h1>
        {validForm.errors? validForm.errors.map((error)=>
          <div className="validation-errors">
            <span className="validation-error">{error}</span>
          </div>
      ) : ''}
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        <ErrorBlock error={errorMessage}/>
        <button type="submit" className="button mt-24px">
          Login
        </button>
      </form>
    </div>
  )
};

export default Login;
