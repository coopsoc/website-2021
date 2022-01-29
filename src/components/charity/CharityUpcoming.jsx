import React, { useEffect, useState } from "react";
import { useBreakpoints } from "react-use-size";
import { Col, Container, Row } from "reactstrap";

import { UPCOMING } from "../../data/CharityData";

/**
 * Partitions a list into smaller sublists, each with a maximum of n elements.
 * @param {any[]} list - The list to be partitioned.
 * @param {number} n   - The number of elements in each part.
 * @returns {any[][]}
 */
const partition = (list, n) => {
  let result = [];

  for (let i = 0; i < list.length; i += n) {
    result.push(list.slice(i, i + n));
  }

  return result;
};

const CharityUpcoming = () => {
  const [small, medium, large] = useBreakpoints([720, 960, 1140]);
  const [parts, setParts] = useState([]);

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

  // Breakpoints change whenever we resize, and we need to change the number
  // of items in each row for a responsive layout
  useEffect(() => {
    let rowItems;

    if (small) {
      rowItems = 1;
    } else if (medium) {
      rowItems = 2;
    } else if (large) {
      rowItems = 3;
    } else {
      rowItems = 4;
    }

    const partitioned = partition(UPCOMING, rowItems).map(rowToDisplay).flat(1);
    setParts(partitioned);
  }, [small, medium, large]);

  return (
    <Container id="charityContainer">
      {parts.map(row => (
        <Row className="justify-content-center align-items-center">
          {row.map(item => (
            <Col sm="6" md="4" lg="3" className="mb-2 mb-lg-0 text-center">
              {item}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default CharityUpcoming;
