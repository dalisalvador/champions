import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";

import isEmpty from "../../common/is-empty";

export default function DetailsModal({ ...props }) {
  const { open, toggle, champion } = props;

  return (
    <div>
      <Modal isOpen={open} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{champion.name}</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="4" xs="4" className="pt-1 text-center">
              <img
                src={champion.icon}
                width="150px"
                height="150px"
                alt="champion"
              />
            </Col>
            <Col>
              <Row className="pb-2 pr-5 justify-content-center">
                <b>STATS</b>
              </Row>
              <Row className="p-2">
                <Col>
                  <b>Hp</b>{" "}
                  {!isEmpty(champion.stats.hp) ? champion.stats.hp : ""}
                </Col>
                <Col className="p-0">
                  <b>Armor</b>{" "}
                  {!isEmpty(champion.stats.armor) ? champion.stats.armor : ""}
                </Col>
                <Col>
                  <b>Mp</b>{" "}
                  {!isEmpty(champion.stats.mp) ? champion.stats.mp : ""}
                </Col>
              </Row>
              <Row className="p-2">
                <Col>
                  <b>Spell</b>{" "}
                  {!isEmpty(champion.stats.spellblock)
                    ? champion.stats.spellblock
                    : ""}
                </Col>
                <Col className="p-0">
                  <b>Attack</b>{" "}
                  {!isEmpty(champion.stats.attackrange)
                    ? champion.stats.attackrange
                    : ""}
                </Col>
                <Col>
                  <b>Crit.</b>{" "}
                  {!isEmpty(champion.stats.crit) ? champion.stats.crit : ""}
                </Col>
              </Row>
              <Row className="p-2">
                <Col>
                  <b>Damage</b>{" "}
                  {!isEmpty(champion.stats.attackdamage)
                    ? champion.stats.attackdamage
                    : ""}
                </Col>
                <Col className="p-0">
                  <b>Reg.</b>{" "}
                  {!isEmpty(champion.stats.mpregen)
                    ? champion.stats.mpregen
                    : ""}
                </Col>
                <Col>
                  <b>Speed</b>{" "}
                  {!isEmpty(champion.stats.movespeed)
                    ? champion.stats.movespeed
                    : ""}
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}
