import React from "react";

export default class NomineeCard extends React.Component {
  constructor(props) {
    super(props);

    this.data = props.data;
    this.fontSize = props.fontSize;
    this.imageRef = props.imageRef;
    this.onImageLoad = props.onImageLoad;
  }

  // Generates a random colour for a nomination card if one isn't provided
  // in the JSON file
  seededRandom(s) {
    let hash = 0;
    if (s.length === 0) return hash;

    for (let i = 0; i < s.length; i++) {
      const chr = s.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }

    return hash;
  }

  render() {
    // Determines the colour of the card we want to use
    let card_colour;

    if (this.data.cardColour === undefined) {
      card_colour = Math.abs(this.seededRandom(this.data.name) % 5) + 1;
    } else {
      card_colour = this.data.cardColour;
    }

    // Code copied over from Team.js, separated out into its own component
    return (
      <div className="col-md-4">
        <div className="meet-the-execs">
          <a className={`card${card_colour} limit`} >
            <img
              alt={this.data.name}
              src={this.data.image}
              ref={this.imgRef}
              onLoad={this.onImgLoad}
              className="card-img-top" />

            <p style={{ fontSize: this.fontSize }}>
              {this.data.description}
            </p>

            <div className={`go-corner${card_colour}`}>
              <div className="go-arrow" />
            </div>
          </a>
        </div>

        <div className="card-body text-center">
          <h4 className="about-name">{this.data.name}</h4>
        </div>
      </div>
    );
  }
}