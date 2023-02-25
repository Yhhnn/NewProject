//imports
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//define helper functions and variables here

function Pokemon(props) {

  const {
  } = props

  //define state
  const [data, setData] = useState(null)
  const {name} = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(json => setData(json)) // set state when the data received
      .catch(err => err) // return the error
    }, [])

  //component logic

  return (
    <>
      {!data ? (<div> Loading... </div>) : (
      <div className="pokemon-details">
        <img src={data.sprites.front_default} alt={`sprite of ${data.name}`}></img>
        <div>No.{data.id} : {data.name}</div>
        <div>{data.species.name} Pokemon</div>
        <div>HT  {data.height}</div>
        <div>WT  {data.weight}lbs.</div>
        <div>Stats</div>
        <div className='stat-container'>
          {data.stats.map((element) => {
            return (
              <div>{element.stat.name}: {element.base_stat}</div>
            )
          })}
        </div>
      </div>
      ) 
    }
    </>
  )
}
export default Pokemon