import React, { useState, Fragment } from "react";
import { Spring } from "react-spring/renderprops";
import DetailsModal from "./Modal/DetailsModal";

export default function Champion({ ...props }) {
  const { champion } = props;
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <DetailsModal open={open} toggle={toggle} champion={champion} />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 100, duration: 400 }}
      >
        {props => (
          <div className="raised" style={props} onClick={() => toggle()}>
            <div style={c1Style}>
              <div className="img">
                <img src={champion.icon} alt="champion" />
              </div>
              <h1>{champion.name} </h1>
              <h2>
                <i>
                  "
                  {champion.title.charAt(0).toUpperCase() +
                    champion.title.slice(1)}
                  "
                </i>
              </h2>
              <p style={description}>{champion.description}</p>
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
  margin: "2rem",
  border: "1px solid transparent",
  borderRadius: "10px"
};

const description = {
  overflowWrap: "break-word",
  paddingTop: "20px"
};
