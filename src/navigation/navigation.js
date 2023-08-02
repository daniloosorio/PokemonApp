import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteNavigation from './FavoriteNavigation';
import Accounts from '../screens/Accounts';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab  = createBottomTabNavigator();

export default function navigation() {
  return (
  <Tab.Navigator initialRouteName="Pokedex"
  initialRouteName="Pokedex"
  screenOptions={{headerShown:false}}
  >
    <Tab.Screen
        name="Favorte"
        component={FavoriteNavigation}
        options={{
            tabBarLabel: "Favoritos",
            //tabBarBadge: 3,
            tabBarIcon: ({color, size}) => (
                <Icon name="heart" color= {color} size={size}/>
                ),
        }}
    />
    <Tab.Screen 
        name="Pokedex" 
        component = {PokedexNavigation} 
        options = {{
            tabBarLabel : "",
            tabBarIcon : () => renderPokeBall()
        }}
        />
    <Tab.Screen 
        name="Account" 
        component = {AccountNavigation}
        options={{
            tabBarLabel: "Mi cuenta",
            //tabBarBadge: 3,
            tabBarIcon: ({color, size}) => (
                <Icon name="user" color= {color} size={size}/>
                ),
        }}
    />
  </Tab.Navigator>
  )
}

function renderPokeBall(){
    return(
        <Image source={require('../assets/pokeball.png')}
        style = {{width:75,height:75,top:-15}}
        />
    )
}