function Router() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(
      "https://developer.nps.gov/api/v1/parks?fields=images&api_key=Gzi5YUD266c1PzJqT3jv0y1exjey9Wd7HL9uCRi8"
    )
      .then((response) => response.json())
      .then((data) => setParks(data.data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/park/:id">
          <ParkPage parks={parks} />
        </Route>
        <Route path="/park/:id/activities">
          <h1>Activities</h1>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
