import React from "react";
import { Card } from "react-bootstrap";

const InfluencerCard = ({ influencer }) => {
  return (
    <Card className="bg-white shadow-lg mb-4 p-3 rounded influencer-card">
      <Card.Img variant="top" src={influencer.image} className="card-image" />
      <Card.Body>
        <Card.Title>{influencer.firstName} {influencer.lastName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Category: {influencer.company.department}</Card.Subtitle>

        <Card.Text>
          ⭐ Credibility: {influencer.credibilityScore}/10<br />
          👥 Followers: {influencer.followers.toLocaleString()}<br />
          📍 Location: {influencer.address.city}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfluencerCard;
