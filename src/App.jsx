import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isDecimeters, setIsDecimeters] = useState(true);
  const [isHectograms, setIsHectograms] = useState(true);

  useEffect(() => {
    changePokemon()
  }, [])

  const changePokemon = () => {
    const randomId = Math.floor(Math.random() * 600) + 1
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(res => setPokemon(res.data))
  }

  console.log(pokemon);
  return (
    <div className="App">
      <div className='logo'>
        {/*Aquí va la imange del logo de pokémon*/}
      </div>
      <div className='card'>
        <div className='container-img'>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
          <h1>{pokemon.name}</h1>
        </div>
        <div className='container-data'>
          <div className='data'>
            <p>
              <b>Weight: </b> {" "}
              {isHectograms ? pokemon.weight : pokemon.weight / 10} {""}
              {isHectograms ? " Hectograms" : " Kilograms"}
            </p>
            <p>
              <b>Heigth: </b>
              {isDecimeters ? pokemon.height : pokemon.height / 10}
              {isDecimeters ? " Decimeters" : " Meters"}
            </p>
            <p><b>Type: </b>{pokemon.type?.[0].type.name} Decimeters</p>
          </div>
          <div className='btn'>
            <button onClick={() => setIsDecimeters(!isDecimeters)}>
              Change Height
            </button>
            <button onClick={() => setIsHectograms(!isHectograms)}>
              Change Weight
            </button>
            <button onClick={changePokemon}>
              Change Pokemon
            </button>
          </div>

        </div>
      </div>
      <footer>
        <h1> © Anderson Durán</h1>
      </footer>
    </div>
  )
}

export default App
