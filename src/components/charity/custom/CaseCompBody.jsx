import React from "react";
import { Row, Col } from "reactstrap";

import CharityBody from "../CharityBody";

const CaseCompBody = ({ event }) => {
  return (
    <>
      <CharityBody event={event} />
      <hr></hr>
      <Row className="text-center">
        <Col>
          <div className='verticalAlignTextDiv'>
            <p> Congratulations to our winning team, Ignite Consulting, for their incredible solution. Well done Annie Yan, Nicole Huang, Jerry Yeh and Ethan Wong! </p>
          </div>
        </Col>
        <Col>
          <img src={event["image2"]} alt={event["title"]} style={{ width: "100%" }} />
        </Col>
      </Row>
    </>
  );
}

export default CaseCompBody;
