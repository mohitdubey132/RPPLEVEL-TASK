import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

//const errorServerNotify = () => toast.error("some error comes in server!");
const successNotify = () => toast.success("Login successfully ");
const failedLoginNotify = () => toast.error("Password or Email don`t match");
const SignIn = () => {
  let navigate = useNavigate();
  //const [call,setcall] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //console.log(info)
  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
   
  }
  // useEffect(() => {
  //   // Perform the side effect here
  //   fetchData();
  // }, []);

  async function fetchData() {
    const response = await fetch('http://localhost:4000/api/v1/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

  const data = await response.json()
  console.log(data);
  if (data.success === true) {
    successNotify();
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem("userName", data.user.Name)
    setTimeout(() => { navigate('/books'); }, 4000);

  }
  else {
    failedLoginNotify();
  }
    // Fetch data from an API and update the state
  //   fetch('http://localhost:4000/api/v1/loginUser', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password
  //     })
  //   })
  //     .then(response =>  response.json())
  //     .then(data => {
  //       setData(data);
  //       successNotify();
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       errorServerNotify();
  //     });
  //
 }
  return (<>
    <div id='signin'><h1>Sing In</h1>
      <center> <Toaster />
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            margin="normal"
            required
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            margin="normal"
            required
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
          <Button type='' variant='contained' color='warning' onClick={()=>navigate(-1)}>Back</Button>
        </form>
      </center>

    </div>

  </>
  )
};

export default SignIn;