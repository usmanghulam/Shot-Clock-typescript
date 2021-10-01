import React from "react";
import { Container, Row } from "reactstrap";
import Clock from "./Clock";
import "./index.css";

const App = () => {
  return (
    <Container className="">
      <h1 className="mt-4">
        <b>Shot Clock</b> 🏀
      </h1>
      <Row className="clocks">
        <Clock className={"clock1"} />
        <Clock className={"clock2"} />
      </Row>
    </Container>
  );
};
export default App;
