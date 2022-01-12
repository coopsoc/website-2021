import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subcom = ({ data }) => {
  const n_icons = data["icon"].length;

  return (
    <>
      <br />
      <div class="row">
        <div class="col-sm-8">
          {data["icon"].map((icon, index) => {
            if (index === n_icons - 1) {
              return <FontAwesomeIcon icon={icon} size="4x" />;
            } else {
              return <FontAwesomeIcon icon={icon} size="4x" style={{ margin: "10px" }} />;
            }
          })}
          <FontAwesomeIcon icon={data["icon"]} size="4x" />
          <div class="card-body text-center">
            <h4 class="about-name">{data["name"]}</h4>
            <p class="card-text subcom-desc">{data["description"]}</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-body text-center">
            <ul class="list-group">
              <br></br>
              {data["name"] === "Marketing" ? <></> : data["name"] === "Publications/IT" ? <div><br></br> <br></br></div> : <br></br>}
              {data["members"].map(name => <li class="list-group-item border-0 li-name">{name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcom;