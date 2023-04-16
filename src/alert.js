import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./App.css";

function AlertMessage() {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => setShowAlert(false);

  return (
    <>
      {showAlert && (
        <Alert
          variant="info"
          onClose={handleAlertClose}
          dismissible
          id="alertpage"
        >
          Welcome eyyyyy
          <br />
          this site is powered by birthdayShu2023 team
          <br />
          try to use UNKO-KUN(the corsur)
          <br />
          to click on anything you can
          <br />
          <Button
            variant="outline-info"
            size="lg"
            onClick={handleAlertClose}
            className="ml-2"
          >
            <br />{" "}
            <img src="./image/buttin_off.png" width={40} alt="alertoff" />
          </Button>
        </Alert>
      )}
    </>
  );
}

export default AlertMessage;
