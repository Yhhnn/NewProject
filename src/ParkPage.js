import React from "react";
import { useParams } from "react-router-dom";

function ParkPage({ parks }) {
  const { id: parkId } = useParams();
  const activityName = park.activities[0].name;
console.log(`Actividad en ${park.fullName}: ${activityName}`);


  return (
    <div>
      <h2>{park.fullName}</h2>
      <img src={park.images[0].url} alt={park.fullName} />
      <p>{park.description}</p>
    </div>
  );
}

export default ParkPage;
