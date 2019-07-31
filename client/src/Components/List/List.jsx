import React, { Fragment } from "react";
import Champion from "../Champion";

function List({ ...props }) {
  const { champions } = props;

  return (
    <Fragment>
      {champions.length > 0
        ? champions.map((champion, index) => {
            return <Champion key={index} champion={champion} />;
          })
        : ""}
    </Fragment>
  );
}

export default List;
