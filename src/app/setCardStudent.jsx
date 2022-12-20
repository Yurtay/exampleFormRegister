import TextField from "./form/textField";
import React, { useState, useEffect } from "react";
import { validator } from "./utils/validator";
import { useHistory } from "react-router-dom";

const SetCardStudent = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("cardStudent"))
  );
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const currentDate = new Date();
  const year = currentDate.getFullYear() - 1;

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле 'Имя' обязательно для заполнения",
      },
    },
    surname: {
      isRequired: {
        message: "Поле 'Фамилия' обязательно для заполнения",
      },
    },
    year: {
      isRequired: {
        message: "Поле 'Год рождения' обязательно для заполнения",
      },
      isYear: {
        message: "Поле 'Год рождения' не корректно",
      },
      min: {
        message: "Поле 'Год рождения' не корректно",
        value: 4,
      },
      max: {
        message: "Поле 'Год рождения' не корректно",
        value: 4,
      },
      maxYear: {
        message: "Поле 'Год рождения' не корректно",
        value: year,
      },
    },
    portfolio: {
      isRequired: {
        message: "Поле 'Год рождения' обязательно для заполнения",
      },
      isPortfolio: {
        message: "Поле 'Портфолио' должно быть ссылкой",
      },
    },
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
        Создать
      </button>
    </div>
  );
};

export default SetCardStudent;
