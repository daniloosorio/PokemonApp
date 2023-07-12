import React from "react";
import { FlatList, ActivityIndicator, StyleSheet, View, Platform } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons,isNext } = props;
  
  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (<PokemonCard pokemon = {item}/>)}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
        <ActivityIndicator 
        size="large"
        color="#333"
        style={styles.spinner}
        />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 15,
    marginTop: Platform.OS === "android" ? 15 : 0,
  },
  spinner:{
    marginTop:20,
    marginBottom: Platform.OS === "android" ? 90 :60,
  }
});