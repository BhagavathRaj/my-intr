import React, { useState } from 'react'

import { Button, CardActions,CardContent,CardHeader,Divider, TextField, } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { Refresh } from '@material-ui/icons';
import { useNavigate } from 'react-router';
import './stylesheet.css'
import Favourite from './Faavourite';


function SinglePage() {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate=useNavigate();

  const refreshString = () => {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += alphanumericChars.charAt(Math.floor(Math.random() * alphanumericChars.length));
    }
    setCaptcha(captcha);
  };
  const matchCaptcha = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
      navigate('/txt', <Favourite captcha={captcha}/>)
      
    } else {
      setValid(true);
      setSuccess(false);
    }
  };

  return (
    <div>
    
      {success && (
        <Alert severity="success">
          Captcha is valid!
        </Alert>
      )}
      <div className='card'>
        <CardHeader title="Valid Captcha" />
        <Divider />
        <CardContent>
          <CardActions>
            <div className='h3'>{captcha}</div>
            <Button startIcon={<Refresh />} onClick={refreshString} >
              Refresh
            </Button>
          </CardActions>
          <form onSubmit={matchCaptcha}>
            <TextField
              label="Enter Captcha"
              value={text}
              fullWidth
              error={valid}
              helperText={valid && "Invalid Captcha"}
              onChange={(e) => setText(e.target.value)}
              style={{ width: '200px' }}
            />
            <Button variant='contained' color='primary' type='submit' sx={{ marginTop: "20px" }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </div>
     
    </div>
  );
}

export default SinglePage;
