import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet,TextInput,Button,Keyboard  } from 'react-native'
import React from 'react';
import UserData from '../components/Auth/UserData';
import LoginForm from '../components/Auth/LoginForm';
import useAuth from '../hooks/useAuth';


export default function Accounts() {

  const {auth} = useAuth();

  return (
    <View>
      {auth ? <UserData/> : <LoginForm/>}
    </View>
  )
}