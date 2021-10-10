import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormHotel } from "./formHotel/FormHotel";

export const SignUp = () => {
  const [state1, setstate] = useState(["Juan", "Pepito", "Gimenez"]);

  const sendState = () => {};
  <FormHotel setstate={state1} />;
  sendState(state1);
  return (
    <div>
      <h1>Sign Up</h1>
      <p>What kind of user are you?</p>
      <Link to="/formHotel" onClick={sendState}>
        Saludo
      </Link>
      <Link to="/formHotel">A travel Agency</Link>
      <Link to="">Are you registered?</Link>
    </div>
  );
};
