// import React, { useState } from "react";
// import { Alert, Button } from "react-bootstrap";
// import "./App.css";

// function AlertMessage() {
//   const [showAlert, setShowAlert] = useState(true);

//   const handleAlertClose = () => setShowAlert(false);

//   return (
//     <>
//       {showAlert && (
//         <Alert
//           variant="info"
//           onClose={handleAlertClose}
//           dismissible
//           id="alertpage"
//         >
//           Welcome eyyyyy
//           <br />
//           this site is powered by birthdayShu2023 team
//           <br />
//           try to use UNKO-KUN(the corsur)
//           <br />
//           to click on anything you can
//           <br />
//           <Button
//             variant="outline-info"
//             size="lg"
//             onClick={handleAlertClose}
//             className="ml-2"
//           >
//             <br />{" "}
//             <img src="./image/buttin_off.png" width={40} alt="alertoff" />
//           </Button>
//         </Alert>
//       )}
//     </>
//   );
// }

// export default AlertMessage;
import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./App.css";

function AlertMessage() {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => setShowAlert(false);

  return (
    <>
      {showAlert && (
        <div className="bdofalert">
          <Alert
            variant="info"
            onClose={handleAlertClose}
            dismissible
            id="alertpage"
          >
            <p className="txt-p1">Welcome eyyyyy</p>
            <p className="txt-p">Web browsing only !!!</p>
            <p className="txt-p">this site is powered by birthdayShu2023 team</p>
            <p className="txt-p">try to use UNKO-KUN(the cursor),to click on ANYTHING you can</p>
            <p className="txt-p">credits:</p>
            <a
              href="https://twitter.com/SHUBD2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              project twitter{" "}
            </a>
            <a
              href="https://shu-birthday-2023.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              project website
            </a>
            <br />
            <br />
            <a
              href="https://github.com/BirShuDeyy2023/what-does-Shu-say"
              target="_blank"
              rel="noopener noreferrer"
            >
              maybe a github link?{" "}
            </a>
            inspration:
            <a
              href="https://impomu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              I'm POMU site
              <br />
            </a>
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
        </div>
      )}
    </>
  );
}

export default AlertMessage;
