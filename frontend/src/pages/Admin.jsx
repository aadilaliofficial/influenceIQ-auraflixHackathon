import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [influencers, setInfluencers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);


  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setInfluencers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    setInfluencers(influencers.filter(i => i.id !== id));
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Admin Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Followers</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((i) => (
            <tr key={i.id}>
              <td>{i.firstName} {i.lastName}</td>
              <td>{i.height}</td>
              <td><Button variant="danger" onClick={() => handleDelete(i.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
