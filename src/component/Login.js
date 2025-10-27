import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import loginBg from "../images/login-bg.jpg";
import "../App.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/home");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div
      className="login-background d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="p-4 shadow" style={{ width: "22rem", background: "white" }}>
          <h3 className="text-center mb-4 text-primary">  Destination Discoveries Login</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default LoginPage;
