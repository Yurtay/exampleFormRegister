import { Link } from "react-router-dom";
import CardStudent from "./cardStudent";

const MainPage = () => {
  const data = {
    name: "",
    surname: "",
    year: "",
    portfolio: "",
  };
  let dataCardStudent = JSON.parse(localStorage.getItem("cardStudent"));

  const handleSetLocalStorage = () => {
    localStorage.setItem("cardStudent", JSON.stringify(data));
  };

  const handleUpdateLocalStorage = () => {
    localStorage.setItem("cardStudent", JSON.stringify(dataCardStudent));
  };

  console.log(dataCardStudent);
  return (
    <div className="container mt-4 p-2 shadow">
      <h1>Карточка студента</h1>

      {dataCardStudent ? (
        <div>
          <CardStudent data={dataCardStudent} />{" "}
          <Link to="/setCardStudent">
            <button
              className="btn btn-primary"
              onClick={handleUpdateLocalStorage}
            >
              Редактировать
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h4>Нет данных</h4>
          <Link to="/setCardStudent">
            <button className="btn btn-primary" onClick={handleSetLocalStorage}>
              Создать
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainPage;
