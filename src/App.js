import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Squad from "./pages/Squad";
import Heroes from "./pages/View/Heroes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/squad" component={Squad} />
          <Route path="/view/heroes/:id" component={Heroes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
