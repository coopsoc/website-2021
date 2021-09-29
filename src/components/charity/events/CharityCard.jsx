import React from "react";

const CharityCard = ({ event, onClick }) => {
  return (
    <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
      <img
        src={event["image"]}
        alt={event["title"]}
        className="card-img-top"
        onClick={onClick} />
    </div>
  );
}

export default CharityCard;
