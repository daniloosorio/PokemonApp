import { View, Text,StyleSheet,TextInput,Button,Keyboard  } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import {user, userDetails} from '../../utils/userDB'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {

    const [error,setError] = useState("")
    const {login} = useAuth();

    const formik = useFormik({
        initialValues :initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit : (formValue) =>{
            setError("")
            const {userName, password} = formValue
            if(userName!== user.username || password!== user.password){
                setError("credenciales invalidas");
            }else{
                login(userDetails)
            }
        }
    });


  return (
    <View>
      <Text style = {styles.title}>Iniciar Sesion</Text>
      <TextInput placeholder='Usuario' 
        style={styles.input} 
        autoCapitalize="none" 
        value={formik.values.userName}
        onChangeText={(text)=>formik.setFieldValue("userName",text)}
        />
      <TextInput placeholder='Contraseña' 
        style={styles.input} 
        autoCapitalize="none" 
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text)=>formik.setFieldValue("password",text)}

      />
      <Button title ="Entrar" onPress={formik.handleSubmit}/>

      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  )
}


function initialValues() {
    return {
        userName:"",
        password:""
    }
}

function validationSchema() {
    return {
        userName : Yup.string().required("usuario obligatorio"),
        password : Yup.string().required("contraseña obligatoria obligatorio")
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop :50,
        marginBottom:15
    },
    input: {
        height:40,
        margin:12,
        borderWidth: 1,
        padding:10,
        borderRadius: 10
    },
    error:{
        textAlign : 'center',
        color : '#f00',
        marginTop: 20
    }
})