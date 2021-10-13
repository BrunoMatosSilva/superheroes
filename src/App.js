import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./pages/Home";
import ListHero from './pages/ListHero';
import Squad from "./pages/Squad";
import Heroe from "./pages/Heroe";
import { GlobalStyle } from './styles/globals';


function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listhero" exact component={ListHero} />
        <Route path="/squad" component={Squad} />
        <Route path="/heroe/:id" component={Heroe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
