import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class NomineeModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = props.toggle;
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.data.name}</ModalHeader>
        <ModalBody>
          <img src={this.props.data.image} style={{
            width: "100%",
            padding: "20px 50px 20px 50px"
          }} />
          <b>Running for: </b>{this.props.roles.join(", ")}
          <hr />
          {this.props.data.description}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
