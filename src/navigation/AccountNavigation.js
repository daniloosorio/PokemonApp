import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accounts from '../screens/Accounts';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'Accounts' component={Accounts} options={{title : "Mi Cuenta"}}/>
    </Stack.Navigator>
  )
}