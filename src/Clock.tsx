import React, { useState, useEffect } from "react";
import { Button, Col } from "reactstrap";

const Clock = (props: { className: string }) => {
  const { className } = props;
  const [clock, setClock] = useState(24);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    let interval: null | number = null;
    if (pause && clock >= 0) {
      interval = setInterval(() => {
        setClock(() => clock - 1);
      }, 1000);
    }
    if (clock === 0) setClock(24);
    if (!pause && clock !== 24 && interval) clearInterval(interval);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pause, clock]);
  const toggleButton = () => setPause(!pause);
  const resetClock = () => {
    setClock(24);
    if (pause) toggleButton();
  };
  return (
    <Col className={`${className} text-center mt-3`}>
      <div className="timer border p-5 bg-dark">
        <span
          className={`${
            clock <= 10
              ? "text-danger"
              : clock <= 15
              ? "text-warning"
              : "text-success"
          }`}
        >
          {clock}
        </span>
      </div>
      <Button
        outline
        color={!pause ? "dark" : "warning"}
        size="sm"
        onClick={toggleButton}
      >
        {!pause ? "Start" : "Pause"}
      </Button>{" "}
      <Button outline color="danger" size="sm" onClick={resetClock}>
        Reset
      </Button>
    </Col>
  );
};
export default Clock;
