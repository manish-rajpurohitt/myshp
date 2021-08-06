import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import LoginForm from './LoginForm';
import LoginPage from './LoginPage';

export default function Admin(){
  const [auth,updateAuth] = React.useState(false);
  const checkAuth = (res)=>{
    updateAuth(res);
  }
    return <div>
      { auth?  <LoginPage auth={auth} /> : <LoginForm auth={auth} updateAuth={checkAuth} /> }
    </div>
}