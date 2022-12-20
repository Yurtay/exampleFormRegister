import SetCardStudent from "./app/setCardStudent";
import { Route, Switch } from "react-router-dom";
import MainPage from "./app/mainPage";
import CardStudent from "./app/cardStudent";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/setCardStudent" component={SetCardStudent} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
