import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput,KeyboardAvoidingView,ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback,useState,useEffect } from 'react';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {app , auth} from '../../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc,updateDoc,Timestamp } from "firebase/firestore"; 
const db = getFirestore(app);
export default function RegisterPage({navigation}){
  
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[firstname,setFirstName]=useState('')
  const[lastname,setLastName]=useState('')
  const[mobileNumber,setMobileNumber]=useState('')

  const [fontsLoaded] = useFonts({
    'Urbanist': require('../../assets/fonts/Urbanist-Regular.ttf'),
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user){
          navigation.navigate("LandingPage")
      }
      return unsubscribe
    })
  }, [])
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
 
  const handleSignUp=()=>{
    createUserWithEmailAndPassword(auth, email,password)
    .then(userCreds =>{
        const {user} = userCreds;
      const userData = [{
        balance:10000,
        cardInUse:false,
        firstName:firstname,
        lastName:lastname,
        mobileNumber:mobileNumber,
        email:email,
        time:Timestamp.now()
        }]
        setDoc(doc(db, "userdata", user.uid), {userData:userData});
        alert('Your Account is successfully created')
        console.log(user.email)
    } ).catch(error=>alert(error.message))
}

  return (
    <ScrollView style={{flex:1,padding:wp(4), backgroundColor:'white'}}>
      <KeyboardAvoidingView style={{flex:1}} onLayout='padding'>
      <View style={styles.container}>

            <View style={styles.titleView}>
              <Text style={styles.titleTxt}>Hello! Register to get started</Text>
            </View>

                    <View style={styles.dataInputView}>
                    <TextInput style={styles.inputStyle}  value={firstname}
            onChangeText={text=>setFirstName(text)} placeholder='First Name' />
              <TextInput style={styles.inputStyle}  value={lastname}
            onChangeText={text=>setLastName(text)} placeholder='Last Name' />
              <TextInput style={styles.inputStyle}  value={mobileNumber}
            onChangeText={text=>setMobileNumber(text)} placeholder='Mobile Number' />
                    <TextInput style={styles.inputStyle}  value={email}
            onChangeText={text=>setEmail(text)} placeholder='Email' />
                    <TextInput secureTextEntry    value={password}
            onChangeText={text=>setPassword(text)} style={styles.inputStyle} placeholder='Password' />
                  </View>
            

            <View style={styles.registerBtnView}>
              <TouchableOpacity onPress={handleSignUp}> 
                  <Text style={styles.registerBtnTxt}>Register</Text>
              </TouchableOpacity>
            </View>
            
          <View style={styles.geustLinkView}> 
          <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')}>
           <Text style={[styles.geustLinkTxtMain]}> Already Have an account?
            <Text style={styles.geustLinkTxt}> Login Now</Text>
           </Text>
           </TouchableOpacity>
          </View>
        
          <StatusBar style="auto" />
          </View>
      </KeyboardAvoidingView>
 
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:wp(1),
    backgroundColor: 'white',
  },
  backbuttonView:{
    flex:1,
      marginBottom:wp(2),
  },
  inputStyle:{
    flex:1,
    borderWidth:1,
    borderColor:'#E8ECF4',
    borderRadius:8,
    marginBottom:wp(3),
    padding:wp(2),
    backgroundColor:'#F7F8F9'
  },
  titleView:{
    backgroundColor:'white',
    flex:1,
    marginVertical:wp(4)
  },
  titleTxt:{ 
    fontFamily:'Urbanist',
    fontWeight:'700',
    fontSize:30,
  },
  dataInputView:{
    flex:1,
  },
  geustLinkTxtMain:{
    color:'black',
    fontSize:12,
    fontFamily:'Urbanist',
  },
  secondView:{
    width:'100%',
    height:'50%',
    position:'absolute',
    justifyContent:'space-around',
    alignItems:'center',
  },
  registerBtnView:{
    justifyContent:'space-around',
    alignItems:'center',
    padding:wp(4),
    flex:1,
    borderRadius:10,
    backgroundColor:'#1E232C'
  },
  registerBtnTxt:{
    fontWeight:'600',
    fontFamily:'Urbanist',
    fontSize:15,
    color:'white'
  },
  geustLinkView:{
    padding:wp(6),
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  geustLinkTxt:{
    color:'#35C2C1',
    fontSize:12,
    fontFamily:'Urbanist',
    borderBottomWidth:1,
    borderBottomColor:'#35C2C1'
  }
});
