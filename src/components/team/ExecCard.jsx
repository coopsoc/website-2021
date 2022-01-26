import React from "react";

const ExecCard = ({ data, colour, fontSize, imgRef, onImgLoad }) => {
  return (
    <div className="col-md-4">
      <div className="meet-the-execs">
        <a className={`card${colour} limit`} >
          <img
            alt={data["name"]}
            src={data["image"]}
            ref={imgRef}
            onLoad={onImgLoad}
            className="card-img-top" />
          <p style={{ fontSize: fontSize }}>{data["description"]}</p>
          <div className={`go-corner${colour}`}>
            <div className="go-arrow" />
          </div>
        </a>
      </div>
      <div className="card-body text-center">
        <h4 className="about-name">{data["name"]}</h4>
        {data["role"] === "" ? <p className="about-role">{data["role"]}</p> : null}
      </div>
    </div>
  );
};

export default ExecCard;
