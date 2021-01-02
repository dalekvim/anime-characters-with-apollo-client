import { Link, Route, Switch } from "react-router-dom";
import { Character } from "./pages/Character";
import { Characters } from "./pages/Characters";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/characters" component={Characters} exact />
      <Route path="/character/:id" component={Character} exact />
      <Route
        path="/"
        render={() => (
          <>
            404 Page error not found.
            <br />
            <Link to="/">Go home.</Link>
          </>
        )}
      />
    </Switch>
  );
};
