import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Row, Col } from "reactstrap";

export default class NomineeModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
  }

  render() {
    return (
      <Modal className="modal-dialog-centered modal-lg" isOpen={this.props.isOpen} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.data.name}</ModalHeader>
        <ModalBody>
        <Row className="justify-content-center text-center ">
          <img src={this.props.data.image} style={{
            width: "50%",
            padding: "20px 50px 20px 50px"
          }} />
        </Row>
        <Row className="justify-content-center text-center ">
          <b>Running for:&nbsp; </b>{this.props.roles.join(", ")}
        </Row>
          <hr />
          {this.props.data.description}
        </ModalBody>
      </Modal>
    );
  }
}