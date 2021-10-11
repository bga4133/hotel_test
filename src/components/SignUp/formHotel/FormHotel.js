import React, { useState } from "react";

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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onClick={onChangeHandler}
          defaultValue={inputValue}
          required
        />
        <input
          type="text"
          name="name"
          onClick={onChangeHandler}
          defaultValue={inputValue}
          required
        />
        <input
          type="text"
          name="name"
          onClick={onChangeHandler}
          defaultValue={inputValue}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
