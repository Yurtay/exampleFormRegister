const CardStudent = ({ data }) => {
  const age = 2022 - data.year;
  console.log(age);

  function renderPhrase(number) {
    const titles = ["год", "года", "лет"];
    const cases = [2, 0, 1, 1, 1, 2];
    return (
      "(" +
      number +
      " " +
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ] +
      ")"
    );
  }

  return (
    <div>
      <div>
        <span className="fw-bold">Имя: </span>
        <span>{data.name}</span>
      </div>
      <div>
        <span className="fw-bold">Фамилия: </span>
        <span>{data.surname}</span>
      </div>
      <div>
        <span className="fw-bold">Год рождения: </span>
        <span>{data.year + " " + renderPhrase(age)}</span>
      </div>
      <div>
        <span className="fw-bold">Фамилия: </span>
        <a href={data.portfolio}>{data.portfolio}</a>
      </div>
    </div>
  );
};

export default CardStudent;
