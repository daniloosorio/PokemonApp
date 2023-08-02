import {Text,Button } from 'react-native'
import React, { useEffect,useState,useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonsDetailsApi } from '../api/pokemon'
import useAuth from "../hooks/useAuth";
import PokemonList from '../components/PokemonList';
import { SafeAreaView } from 'react-native-safe-area-context'
import NoLogged from '../components/NoLogged'


export default function Favorite() {
  const [pokemons,setPokemons] = useState([])
  const {auth} = useAuth();

useFocusEffect(
  useCallback (() => {
    if(auth){
      (async () => {
        const response = await getPokemonsFavoriteApi();
        const pokemonsArray = [];
        for await (const id of response){
          const pokemonDetails = await getPokemonsDetailsApi(id)
          
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order : pokemonDetails.order,
            image: pokemonDetails.sprites.other['official-artwork'].front_default
          });
        }
        
        setPokemons(pokemonsArray);
    })();
    }
  },[auth])
)
  return !auth ? (
    <NoLogged/>
  ) : (
    <SafeAreaView>
      <PokemonList pokemons = {pokemons}/>
    </SafeAreaView>

  )
}