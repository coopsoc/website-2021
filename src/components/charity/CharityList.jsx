import React from "react";
import { Container, Row } from "reactstrap";

class CharityList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center align-items-center">
          {this.props.sponsors.map(sponsor => (
            <div className="col-lg-3 mb-3 mb-lg-0">
              <a href={sponsor.link}>
                <img
                  alt={sponsor.name}
                  src={sponsor.image}
                  style={{ width: "100%" }} />
              </a>
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CharityList;
