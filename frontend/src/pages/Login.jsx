import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Login.jsx
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@influenceiq.com' && password === 'admin123') {
      localStorage.setItem('token', 'mock-admin-token');
      navigate('/admin');
    } else if (email && password) {
      localStorage.setItem('token', 'mock-user-token');
      navigate('/');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
