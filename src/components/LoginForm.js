import { Typography,TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { adminLogin } from "./apiService";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
export default function LoginForm(props){
    const classes = useStyles();
    const [creds, setCreds] = React.useState({username:"", password:""});
    const handleChange = (e)=>{
        let cred = {...creds};
        cred[e.target.name] = e.target.value;
        setCreds(cred);
    }

    const handleLogin = (e)=>{
        let res = "";
        
        adminLogin(creds).then(res=>{
            if(res?.data?.error) 
                props.updateAuth(false);
            if(res?.data?.success)
                props.updateAuth(true);
        });
        
    }

    return <div>
        <h1>Admin Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                <Typography  style={{padding:"10px",margin:"10px"}}>Username:</Typography>
                <TextField value={creds.user} name="username" onChange={e=>handleChange(e)} id="outlined-basic" label="Username"  variant="outlined" />
            </div>
            <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                    <Typography style={{padding:"10px",margin:"10px"}}>Username:</Typography>
                    <TextField value={creds.pass} name="password" onChange={e=>handleChange(e)} id="outlined-basic" label="Password"  variant="outlined" />
            </div>
            <Button variant="contained" color="primary" onClick={e=>handleLogin()}>Login</Button>
        </form>
    </div>
}