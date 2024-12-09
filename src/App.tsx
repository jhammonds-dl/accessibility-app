import { Route, Switch } from "wouter";
import { PageContainer } from "@toolpad/core/PageContainer";
import "./App.css";
import InaccessiblePage from "./pages/InaccessiblePage/InaccessiblePage";
import StartPage from "./pages/StartPage";
import FinishPage from "./pages/FinishPage";
import ExerciseComplete from "./pages/ExerciseComplete/ExerciseComplete";

function App() {
  return (
    <PageContainer component="main">
      <Switch>
        <Route path="/accessibility-app/" component={StartPage} />
        <Route
          path="/accessibility-app/exercise"
          component={InaccessiblePage}
        />
        <Route
          path="/accessibility-app/exerciseComplete"
          component={ExerciseComplete}
        />
        <Route path="/accessibility-app/finish" component={FinishPage} />
        {/* Default route in a switch */}
        <Route>
          <h1>404: No such page!</h1>
        </Route>
      </Switch>
    </PageContainer>
  );
}

export default App;
