import React from "react";
import { Row } from "reactstrap";
import ExecCard from "./ExecCard";

const ExecSection = ({ section, fontSize, imgRef, onImgLoad }) => {
  return (
    <>
      <hr />
      <Row className="justify-content-center text-center mb-lg">
        <h2>{section.sectionName}</h2>
      </Row>
      {section.members.map(row => (
        <div class="row justify-content-center">
          {row.map(member => (
            <ExecCard
              data={member}
              colour={section.colour}
              fontSize={fontSize}
              imgRef={imgRef}
              onImgLoad={onImgLoad} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ExecSection;
