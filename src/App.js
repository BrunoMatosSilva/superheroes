import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Heroes from "./pages/View/Heroes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/view/heroes/:id" component={Heroes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
