const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);
export const validatorConfig = {
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
