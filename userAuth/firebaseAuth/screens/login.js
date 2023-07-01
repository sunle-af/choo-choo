import { useNavigation } from '@react-navigation/native';
import { StyleSheet,KeyboardAvoidingView,Button, Text, View, TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'
import { app,auth } from '../firebase';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from "firebase/firestore";
const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const navigation = useNavigation()
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user=>{
        if(user){
            navigation.navigate("Home")
        }
        return unsubscribe
      })
    }, [])
    
    const handleSignUp=()=>{
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCreds) =>{
            const user = userCreds.user;
            alert(user.email)
            console.log(user.email)
        } ).catch(error=>alert(error.message))
    }
    const handleLogin=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(userCreds =>{
            const user = userCreds.user;
            const uid = user.uid
            const profileData = {
              firstName: 'John',
              lastName: 'Doe'
            };
            return collection('users').doc(uid).set(profileData);

        } ).catch(error=>alert(error.message))
    }
  return (
    <KeyboardAvoidingView style={styles.container}  behavior='padding'>
       <View style={{}}>
       <TextInput 
       value={email}
       onChangeText={text=>setEmail(text)}
       placeholder='Email' style={{padding:10,margin:5, borderWidth:1,}} />
        <TextInput 
        value={password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry={true} placeholder='Password' style={{padding:10,margin:5,borderWidth:1,}} />
       
        <View style={{margin:10}}>
            <Button onPress={handleLogin} title='Login' />
       </View>
       <View  style={{margin:10}}>
            <Button onPress={handleSignUp} title='Register' />
       </View>
       </View>
        
    </KeyboardAvoidingView >
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },

})