import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import "./Agents.css";
const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("https://travel-bangladesh.herokuapp.com/agents")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);

  return (
    <Container className="my-5">
      <h1 className="fw-bold text-center my-5">Our Agents</h1>
      <div className="agents-card">
        {agents.map((agent) => (
          <Card className="single-agent" key={agent._id}>
            <Card.Img className="agent-image" variant="top" src={agent.img} />
            <Card.Body>
              <Card.Title>{agent.name}</Card.Title>
              <Card.Text>
                Email: <small>{agent.enail}</small>
              </Card.Text>
              <Card.Text>
                Phone: <small>{agent.phone}</small>
              </Card.Text>
            </Card.Body>
            <div className="text-center mb-3">
              <a className="btn btn-success" href={`tel:${agent.phone}`}>
                Contact Now
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Agents;
