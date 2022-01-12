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

    if (this.data.preference === 1) {
      this.classes = ["card-img-top pref1"];
    } else {
      this.classes = ["card-img-top pref2"];
    }
  }

  render() {
    return (
      <div className="col-md-4-agm">
      {/* <div className="agmCard"> */}
        <div className="meet-the-execs">
          <a className="limit" onClick={this.onClick}>
            <img
              alt={this.data.name}
              src={this.data.image}
              ref={this.imgRef}
              onLoad={this.onImgLoad}
              className={this.classes}/>
          </a>
        </div>

        <div className="card-body text-center">
          <h4 className="agm-name">{this.data.name}</h4>
        </div>
      </div>
    );
  }
}
