import React from "react";

// Code copied over from Team.js, separated out into its own component -
// consists of a person's photo and their name directly underneath
export default class NomineeCard extends React.Component {
  constructor(props) {
    super(props);

    this.data = props.data;
    this.fontSize = props.fontSize;
    this.imageRef = props.imageRef;
    this.onImageLoad = props.onImageLoad;
    this.onClick = props.onClick;
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="meet-the-execs">
          <a className="limit" onClick={this.onClick}>
            <img
              alt={this.data.name}
              src={this.data.image}
              ref={this.imgRef}
              onLoad={this.onImgLoad}
              className="card-img-top" />
          </a>
        </div>

        <div className="card-body text-center">
          <h4 className="about-name">{this.data.name}</h4>
        </div>
      </div>
    );
  }
}
