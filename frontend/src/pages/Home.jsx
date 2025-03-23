import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import InfluencerCard from "../components/InfluencerCard";

const Home = () => {
  const [influencers, setInfluencers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("credibilityScore");


  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => {
        const enhancedUsers = res.data.users.map(user => ({
          ...user,
          credibilityScore: Math.floor(Math.random() * 10) + 1,
          followers: (user.weight * 1000) + 50000,
          category: user.company.department
        }));
        setInfluencers(enhancedUsers);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="my-4 text-center">Top Influencers</h2>
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search influencers..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Select onChange={(e) => setSortBy(e.target.value)}>
          <option value="credibilityScore">Sort by Credibility</option>
          <option value="followers">Sort by Followers</option>
        </Form.Select>
      </Form>


      <Form className="d-flex gap-3 mb-3">
        <Form.Control
          type="search"
          placeholder="Search by name or category..."
          className="flex-grow-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Select style={{ width: '250px' }}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="credibilityScore">Sort by Credibility</option>
          <option value="followers">Sort by Followers</option>
          <option value="category">Sort by Category</option>
        </Form.Select>
      </Form>

      <Row>
        {influencers
          .filter(i => i.firstName.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => b[sortBy] - a[sortBy])
          .map((influencer) => (
            <Col md={4} key={influencer.id}>
              <InfluencerCard influencer={influencer} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
