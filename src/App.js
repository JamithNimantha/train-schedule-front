import React from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import TrainSearch from './component/trains-search/TrainSearch'

function App() {
  return (
    <Switch>
      <Route path="/search-trains" component={TrainSearch}/>
      <Route path="" exact render={()=><Redirect to="/search-trains"/>} />
      <Route path="**" exact render={()=><Redirect to="/search-trains"/>}/>
    </Switch>
  );
}

export default App;
