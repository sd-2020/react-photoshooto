import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import initFontAwesome from "./components/pages/initFontAwesome";


initFontAwesome();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            
            <div> Write your code here </div>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
