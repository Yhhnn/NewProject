import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ParkPage from "./ParkPage";

function Router() {
  const [parks, setParks] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://developer.nps.gov/api/v1/parks?fields=images&api_key=Gzi5YUD266c1PzJqT3jv0y1exjey9Wd7HL9uCRi8"
    )
      .then((response) => response.json())
      .then((data) => setParks(data.data));
  }, []);

  return (
    <Routes>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/park/:id/actividades">
       <ParkPage parks={parks} />
      </Route>
      </Routes>
      );
     }

export default Router;
