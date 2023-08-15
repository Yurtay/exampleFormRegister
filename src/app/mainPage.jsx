import CardStudent from "./cardStudent";
import React from "react";
import Button from "./components/button";

const MainPage = () => {
  const dataCardStudent = JSON.parse(localStorage.getItem("cardStudent"));
  return (
    <div className="container mt-4 p-2 shadow">
      <h1>Карточка студента</h1>
      <div>
        {dataCardStudent ? (
          <>
            <CardStudent data={dataCardStudent} />
            <Button title="Редактировать" />
          </>
        ) : (
          <>
            <span className="m-4">Нет данных</span>
            <br />
            <Button title="Создать" />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
