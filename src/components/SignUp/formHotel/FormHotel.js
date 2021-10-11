import React, { useState } from "react";
import { Link } from "react-router-dom";

export const FormHotel = props => {
  const [inputValue, setInputValue] = React.useState("hola");
  const onChangeHandler = event => {
    setInputValue("Hola");
  };
  const onSubmit = () => {
    alert(JSON.stringify("hola"));
  };
  return (
    <div>
      <header className="header flex">
        <div className="header-container flex">
          <Link to="/" className="back">
            {" "}
            ←{" "}
          </Link>
          <Link to="/" className="back">
            x
          </Link>
        </div>
      </header>
      <form onSubmit={onSubmit} className="formContainer flex">
        <h1>Hotel Guest</h1>
        <div className="containerInputs-form flex">
          <div className="labelcontainer">
            <label htmlFor="">Name (required)</label>
          </div>
          <input
            type="text"
            name="name"
            onClick={onChangeHandler}
            defaultValue={inputValue}
            required
          />
          <div className="labelcontainer">
            <label htmlFor="">Last name (required)</label>
          </div>
          <input
            type="text"
            name="name"
            onClick={onChangeHandler}
            defaultValue={inputValue}
            required
          />
          <div className="labelcontainer">
            <label htmlFor="">Email (required)</label>
          </div>
          <input
            type="text"
            name="name"
            onClick={onChangeHandler}
            defaultValue={inputValue}
            required
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
