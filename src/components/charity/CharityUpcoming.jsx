import React from "react";
import { Col, Container, Row } from "reactstrap";

import { UPCOMING } from "views/data/CharityData";

const CharityUpcoming = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        {UPCOMING.map(event => (
          <Col lg="2" className="mb-2 mb-lg-0 text-center">
            <img
              alt={event.name}
              src={event.image}
              style={{ width: "100%" }} />
            <b>{event.name}</b>
            <p>{event.date}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CharityUpcoming;
