import React from "react";

const CharityBody = ({ event }) => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img
          src={event["image"]}
          alt={event["title"]}
          style={{ width: "50%" }} />
      </div>
      <hr></hr>
      {event["description"].split("\n").map(line => <p>{line}</p>)}
    </>
  );
}

export default CharityBody;
