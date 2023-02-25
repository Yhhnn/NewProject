//imports
import PokemonCard from ".Pokedex/PokemonCard"
import {useState, useEffect} from 'react'
//define helper functions and variables here

function Pokedex(props) {
  const {
  //destructure props
  } = props

  //define state

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(json => setData(json.results)) // set state when the data received
      .catch(err => err) // return the error
    }, [])

  //component logic

  return (
    <>
      {!data ? <div> Loading... </div> : 
      <div className="pokemon-container">
        {data.map((pokemon) => {
          return (
            <PokemonCard 
              name={pokemon.name}
            />
          )
        })}
      </div>
      }
    </>
  )
}
export default Pokedex