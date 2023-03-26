import React, { useState } from "react";
import {
  Button,
  TextField,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
const sucessNotify = () => toast.success("user registerd!");

const RegistrationForm = () => {
  let navigate = useNavigate();
  const [fullName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: fullName,
        email,
        password,
      }),
    });

    const data = await response.json()
    if (data.success === true) {
      sucessNotify();
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("userName", data.user.Name);
      
      navigate('/');
    }
    // if (data.success === 'false') {

    // //	navigate(-1);
    // }
    console.log(data);

  };

  return (
    <div id="Register">
      <center> <Toaster />
        <form onSubmit={handleSubmit}>
          <h2>Register </h2>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={(event) => setFirstName(event.target.value)}
            margin="normal"
            required
          />
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
  );
};

export default RegistrationForm;