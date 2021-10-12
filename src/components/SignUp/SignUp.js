import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInfoAction } from "../../redux/actions";
import Swal from "sweetalert2";

export const SignUp = () => {
  const showModal = () => {
    Swal.fire({
      icon: "success",
      title: "Thanks u!",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      confirmButtonText: "Continue"
    });
  };
  const sendState = () => {
    let newInfo = {
      id: 0,
      title: "Hotel Guest",
      name: "Juan",
      lastName: "Perez",
      email: "email@email.com",
      label1: "Name (required)",
      label2: "Last name (required)",
      labelEmail: "Email (required)",
      text: "Hotel",
      text2: "LastName"
    };
    dispatch(addInfoAction(newInfo));
  };
  const sendState2 = () => {
    let newInfo = {
      id: 1,
      title: "Travel Agency",
      name: "Viajes S.A",
      lastName: "555 555 555",
      email: "email@email.com",
      label1: "Company Name (required)",
      label2: "Agency Id Code(required)",
      labelEmail: "Email (required)",
      text: "Agency",
      text2: "Agency ID Code"
    };
    dispatch(addInfoAction(newInfo));
  };
  const dispatch = useDispatch();
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
          <Link
            to="/formHotel"
            className="buttonSignUp flex"
            onClick={sendState2}
          >
            A travel Agency
          </Link>
        </div>
        <Link to="" className="registeredButton" onClick={showModal}>
          Are you registered?
        </Link>
      </div>
    </div>
  );
};
