import TextField from "./form/textField";
import React, { useState, useEffect } from "react";
import { validator } from "./utils/validator";
import { useHistory } from "react-router-dom";
import { validatorConfig } from "./utils/validatorConfig";

const SetCardStudent = () => {
  const dataCardStudent = JSON.parse(localStorage.getItem("cardStudent"));
  const nameButton = dataCardStudent ? "Обновить данные" : "Создать";
  const [data, setData] = useState(
    dataCardStudent
      ? JSON.parse(localStorage.getItem("cardStudent"))
      : { name: "", surname: "", year: "", portfolio: "" }
  );

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleClick = () => {
    history.push(`/`);
    localStorage.setItem("cardStudent", JSON.stringify(data));
  };

  return (
    <div className="container mt-4 p-2 shadow">
      <h1>Создать</h1>
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Фамилия"
        name="surname"
        value={data.surname}
        onChange={handleChange}
        error={errors.surname}
      />
      <TextField
        label="Год рождения"
        name="year"
        value={data.year}
        onChange={handleChange}
        error={errors.year}
      />
      <TextField
        label="Портфолио"
        name="portfolio"
        value={data.portfolio}
        onChange={handleChange}
        error={errors.portfolio}
      />

      <button
        className="btn btn-primary"
        type="submit"
        disabled={!isValid}
        onClick={handleClick}
      >
        {nameButton}
      </button>
    </div>
  );
};

export default SetCardStudent;
