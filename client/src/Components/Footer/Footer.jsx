import React from "react";
import { Row, Button } from "reactstrap";
import isEmpty from "../../common/is-empty";
function Footer({ ...props }) {
  const { getChampions, champions } = props;
  return (
    <Row className="justify-content-center pb-5">
      {!isEmpty(champions) ? (
        <Button
          color="success"
          onClick={() => {
            if (champions.length > 0)
              getChampions(champions.slice(-1)[0].id, 2);
          }}
        >
          Load More
        </Button>
      ) : (
        ""
      )}
    </Row>
  );
}

export default Footer;
