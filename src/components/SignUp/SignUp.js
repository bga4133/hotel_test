import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormHotel } from "./formHotel/FormHotel";

export const SignUp = () => {
  const [state1, setstate] = useState(["Juan", "Pepito", "Gimenez"]);

  const sendState = () => {
    alert("send");
  };
  return (
    <div className="signUp-container">
      <div className="rowSignUp">
        <h1>Sign Up</h1>
        <p>What kind of user are you?</p>
        <div className="buttons-container flex">
          <Link
            to="/formHotel"
            className="buttonSignUp flex"
            onClick={sendState}
          >
            Saludo
          </Link>
          <Link to="/formHotel" className="buttonSignUp flex">
            A travel Agency
          </Link>
        </div>
        <Link to="">Are you registered?</Link>
      </div>
    </div>
  );
};
