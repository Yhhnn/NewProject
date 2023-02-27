function ParkPage({ parks }) {
  const { id: parkId } = useParams();
  const park = parks.find(park => park.id === parkId);
  console.log(`Location of ${park.fullName}:`, park.latLong);

  return (
    <div>
      <h2>{park.fullName}</h2>
      <img src={park.images[0].url} alt={park.fullName} />
      <p>{park.description}</p>
      <h3>Related Topics</h3>
      <ul>
        {park.topics.map(topic => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
}
