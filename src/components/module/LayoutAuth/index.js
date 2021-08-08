import React from "react";
import { phoneSplit } from "../../../assets/index";
import "../../../assets/";

function Index(props) {
  React.useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="d-flex auth__wrapper">
      <div className="left__auth">
        <div className="header___auth">
          <p className="text-29 header___auth c-white text-left">Zwallet</p>
        </div>
        <img
          src={phoneSplit}
          className="zwallet-img-preview"
          alt="zwallet-preview"
        ></img>
        <div>
          <div className="mb-4">
            <p className="text-24 c-white">App that Covering Banking Needs.</p>
          </div>
          <div>
            <p className="text-16 c-white" style={{ opacity: "80%" }}>
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
      </div>
      <div className="right__auth">
        <div className="header___auth-visible">
          <p className="text-29 c-primary text-center">Zwallet</p>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Index;
