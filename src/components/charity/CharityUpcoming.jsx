import React from "react";
import { Col, Container, Row } from "reactstrap";

import { UPCOMING } from "views/data/CharityData";

// TODO: change based on screen display size
const ROW_ITEMS = 4;

const partition = (list, n) => {
  let result = [];

  for (let i = 0; i < list.length; i += n) {
    result.push(list.slice(i, i + n));
  }
  
  return result;
};

const CharityUpcoming = () => {
  const rowToDisplay = (row) => {
    let images = [];
    let names = [];
    let dates = [];

    for (let i = 0; i < row.length; i++) {
      const item = row[i];

      images.push(
        <img 
          alt={item["name"]}
          src={item["image"]}
          style={{ width: "100%" }} />
      );
      names.push(<b>{item["name"]}</b>);
      dates.push(<p>{item["date"]}</p>);
    }

    return [images, names, dates];
  }

  let partitioned = partition(UPCOMING, ROW_ITEMS).map(rowToDisplay).flat(1);

  return (
    <Container>
      {partitioned.map(row => (
        <Row className="justify-content-center align-items-center">
          {row.map(item => (
            <Col lg="2" className="mb-2 mb-lg-0 text-center">
              {item}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default CharityUpcoming;
