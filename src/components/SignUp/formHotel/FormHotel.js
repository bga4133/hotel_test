import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteInfoAction } from "../../../redux/actions";
import Swal from "sweetalert2";

export const FormHotel = props => {
  const info = useSelector(state => state.info);
  const [inputValueName, setInputValueName] = React.useState("");
  const [inputValueLastName, setInputValueLastName] = React.useState("");
  const [inputValueEmail, setInputValueEmail] = React.useState("");
  const [labelName] = React.useState(info.map(state => state.label1));
  const [labelLastName] = React.useState(info.map(state => state.label2));
  const [labelLastEmail] = React.useState(info.map(state => state.labelEmail));
  const [placeHolderText] = React.useState(info.map(state => state.text));
  const [placeHolderText2] = React.useState(info.map(state => state.text2));

  const dispatch = useDispatch();

  const onChangeHandler = event => {
    setInputValueName(info.map(state => state.name));
    setInputValueLastName(info.map(state => state.lastName));
    setInputValueEmail(info.map(state => state.email));
  };
  const onSubmit = e => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Thanks u!",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      confirmButtonText: "Continue"
    });
  };
  let textPlaceholder1 = `Enter your ${placeHolderText} name`;
  let textPlaceholder2 = `Enter your ${placeHolderText2}`;
  let textPlaceholder3 = `Enter your ${placeHolderText} Email`;
  const backtoSignUp = () => {
    let info = [];
    dispatch(deleteInfoAction(info));
  };
  return (
    <div>
      <header className="header flex">
        <div className="header-container flex">
          <Link to="/" className="back" onClick={backtoSignUp}>
            {" "}
            ←{" "}
          </Link>
          <Link to="/" className="back" onClick={backtoSignUp}>
            x
          </Link>
        </div>
      </header>
      <form onSubmit={onSubmit} className="formContainer flex">
        <h1>{info.map(state => state.title)}</h1>
        <div className="containerInputs-form flex">
          <div className="labelcontainer">
            <label htmlFor="">{labelName}</label>
          </div>
          <input
            type="text"
            name="name"
            onClick={onChangeHandler}
            defaultValue=""
            value={inputValueName}
            placeholder={textPlaceholder1}
            required
          />
          <div className="labelcontainer">
            <label htmlFor="">{labelLastName}</label>
          </div>
          <input
            type="text"
            name="name"
            onClick={onChangeHandler}
            value={inputValueLastName}
            placeholder={textPlaceholder2}
            required
          />
          <div className="labelcontainer">
            <label htmlFor="">{labelLastEmail}</label>
          </div>
          <input
            type="text"
            name="name"
            onClick={onChangeHandler}
            defaultValue=""
            value={inputValueEmail}
            required
            placeholder={textPlaceholder3}
          />
        </div>
        <div className="submit-container flex">
          <button type="submit" className="button-submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
