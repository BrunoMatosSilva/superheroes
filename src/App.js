import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppProvider from './AppContext/Provider';

import Home from "./pages/Home";
import ListHero from './pages/ListHero';
import Squad from "./pages/Squad";
import Heroes from './pages/View/Heroes';
import { ResetStyle } from './styles/reset';


function App() {


  return (
    <AppProvider>
      <BrowserRouter>
        <ResetStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listhero" exact component={ListHero} />
          <Route path="/squad" component={Squad} />
          <Route path="/view/heroes/:id" component={Heroes} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
