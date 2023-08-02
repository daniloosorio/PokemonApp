import { StyleSheet,View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {
const navigation = useNavigation();

  return (
    <View style ={styles.content}>
        <Text style = {styles.text}>Para ver esta pantalla incia sesion</Text>
        <Button title='Ir a loggin' onPress={() => navigation.navigate("Account")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    content :{
        marginVertical : 50,
        paddingHorizontal : 20,
    },
    text : {
        textAlign: 'center',
        marginBottom : 40,
    }

})