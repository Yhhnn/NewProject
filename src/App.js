import React, { useState, useEffect } from "react";

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(
      "https://developer.nps.gov/api/v1/parks?fields=images&api_key=Gzi5YUD266c1PzJqT3jv0y1exjey9Wd7HL9uCRi8"
    )
      .then((response) => response.json())
      .then((data) => setParks(data.data));
  }, []);

  return (
    <div className="App">
      <h1>National Parks</h1>
      <div className="park-cards">
        {parks.map((park) => (
          <div key={park.id} className="park-card">
            <img src={park.images[0].url} alt={park.fullName} />
            <h3>{park.fullName}</h3>
            <p>{park.description}</p>
            <button onClick={() => alert(`You clicked ${park.fullName}`)}>
              You should get to know more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
