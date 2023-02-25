//imports
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//define helper functions and variables here

function PokemonCard(props) {

  const {
  name
  } = props

  //define state
  const [data, setData] = useState(null)

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
      {!data ? <div> Loading... </div> : 

       <Link className="pokemon-card" to={`/pokemon/${data.name}` }>
        <img src={data.sprites.front_default} alt={`sprite of ${data.name}`}></img>
        <div>#{data.id} : {data.name}</div>
       </Link>
      }
   </>
  )
}
export default PokemonCard