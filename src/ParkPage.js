import React from "react";
import { useParams } from "react-router-dom";

function ParkPage({ parks }) {
  const { id } = useParams();
  const park = parks.find((park) => park.id === id);

  console.log(`Location of ${park.fullName}:`, park.latLong);

  return (
    <div>
      <h2>{park.fullName}</h2>
      <img src={park.images[0].url} alt={park.fullName} />
      <p>{park.description}</p>
    </div>
  );
}

export default ParkPage;
