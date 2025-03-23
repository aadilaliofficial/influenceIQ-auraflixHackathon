// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setError("Invalid email format");
            return;
        }

        // Simulate API call
        try {
            // In real app, you would make an actual API call here
            localStorage.setItem('token', 'mock-token');
            navigate('/');
        } catch (err) {
            setError(`Registration failed: ${err.message}`);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4 text-center">Create Account</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        minLength="6"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        minLength="6"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                >
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;