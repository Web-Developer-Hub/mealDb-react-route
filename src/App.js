import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './Componenets/Meals/Meals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import DetailsMeal from './Componenets/DetailsMeal/DetailsMeal';
import NotFound from './Componenets/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Meals />
          </Route>

          <Route exact path='/details/meals/:idMeal'>
            <DetailsMeal />
          </Route>

          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
