import { SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonsAPI } from '../api/pokemon';
import { getPokemonsDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { initial } from 'lodash';

const pokemonsArray = [];
export default function Pokedex() {
  const [pokemons,setPokemons] = useState([])
  const [nextUrl,setNextUrl ]= useState(null)


  useEffect(() => {
    (async () =>{
      await loadPokemons();
    })()
  },[]);

  const loadPokemons = async () =>{
    try{
      const response = await getPokemonsAPI(nextUrl);
      setNextUrl(response.next);
  
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url)
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order : pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons,...pokemonsArray])

      setPokemons(pokemonsArray)

    }catch(error){
     // console.error(error)
    }
  }
  return (
    <SafeAreaView>
      <PokemonList pokemons = {pokemons} loadPokemons={loadPokemons} isNext ={nextUrl}/>
    </SafeAreaView>
  )
}