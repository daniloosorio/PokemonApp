import { View, StyleSheet,SafeAreaView,Text,Image } from 'react-native'
import { capitalize } from 'lodash'
import React from 'react'
import getColorByPokemonType from "../../utils/getColorByPokemonType"

export default function Head(props) {
    const { name, order, image,type } = props;
    const color = getColorByPokemonType(type)

    const bgStyle = [{backgroundColor:color,...styles.bg}]
  return (
    <>
        <View style={bgStyle}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.head}>
                <Text style ={styles.name}>{capitalize(name)}</Text>
                <Text style ={styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <Image source={{uri : image}} style ={styles.image}/>
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  name :{
    color:"#FFF",
    fontWeight:"bold",
    fontSize: 15,
    paddingTop:10,
  },
    bg:{
        width:"100%",
        height: 400,
        position:"absolute",
        borderBottomEndRadius :300,
        borderBottomLeftRadius:300,
        transform:[{scaleX: 2}]
    },
    content :{
        marginHorizontal:30,
        marginTop :10
    },
    head:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        paddingTop:40
    },
    order:{
        color:"#FFF",
        fontWeight : "bold",
    },
    contentImg:{
        flex :1,
        justifyContent : 'center',
        alignItems: "center",
        top:2,
    },
    image :{
        width :250,
        height: 350,
        resizeMode:"contain"
    }
})