import React from 'react'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
const Admin = () => {
  let navigate = useNavigate();

  const [data, setdata] = useState([])
  useEffect(() => {
    return () => {
      async function getdata(){
        const response = await fetch('http://localhost:4000/api/v1/vistors');
        const res = await response.text();
        const res1 = JSON.parse(res);
        console.log(res1)
        setdata([...res1.vistor])
       
      }
     
      getdata();
    };
  }, [])
  console.log(data);
  return (
    <div><h1>admin</h1>
    <Table striped bordered hover>
      <thead>
        <th>index</th>
        <th>Name</th>
      <th>Email</th></thead>
      <tbody>
        {data.map((element ,index)=>{
          return (
            <tr key={index}>{index} 
            <td>{element.Name}</td>
            <td>{element.email}</td></tr>
          )
        })}
      </tbody>
    </Table>
    <Button type='' variant='contained' color='warning' onClick={() => navigate('/')}>Back</Button>

    </div>
  )
}

export default Admin