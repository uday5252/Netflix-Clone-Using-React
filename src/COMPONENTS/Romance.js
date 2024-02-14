import {useState} from 'react'
import Axios from "axios"

function Action() 
{
    const [ actionMovies, setActionMovies] = useState([])

  Axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=32f9e877489c276a3376f21bd753a432")
  .then(function(output)
  {
    setActionMovies(output.data.results)
  })
  .catch(function(error)
  {
    console.log(error)
  })

  return (
    <div>
        <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>ACTION MOVIES</h2>
        <div className='trendingdiv' style={{display: "flex", overflowX: "scroll"}}>
        {
            actionMovies.map(function(i)
            {
                return (
                    <img style={{margin: "6px"}} height="250px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path} />
                )
            })
        }
        </div>
    </div>
  )
}

export default Action
