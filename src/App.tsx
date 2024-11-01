import { Route, Switch } from "wouter";
import { PageContainer } from "@toolpad/core/PageContainer";
import "./App.css";
import ImageComparison from "./pages/ImageComparison/ImageComparison";

function App() {
  return (
    <PageContainer component="main">
      <Switch>
        <Route path="/images" component={ImageComparison} />
        {/* Default route in a switch */}
        <Route>
          <h1>404: No such page!</h1>
        </Route>
      </Switch>
    </PageContainer>
  );
}

export default App;
