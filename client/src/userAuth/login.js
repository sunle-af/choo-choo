import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
export default function LoginPage({navigation}){
  const [fontsLoaded] = useFonts({
    'Urbanist': require('../../assets/fonts/Urbanist-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView style={{flex:1,padding:wp(4), backgroundColor:'white'}}>
    <KeyboardAvoidingView style={{flex:1}} onLayout='padding'>
    <View style={styles.container}>
        <View style={styles.backbuttonView}>
                  <TouchableOpacity onPress={()=>navigation.navigate('WelcomePage')}>
                  <Image source={require('../../assets/images/backbutton.png')} style={{width:41,height:41}} /    >
                  </TouchableOpacity>
          </View>

            <View style={styles.titleView}>
              <Text style={styles.titleTxt}>Welcome back! Glad to see you, Again! </Text>
            </View>


          <View style={styles.dataInputView}>
            <TextInput style={styles.inputStyle} placeholder='Mobile Number' />
            <TextInput secureTextEntry style={styles.inputStyle} placeholder='Password' />
          </View>

          <View style={styles.registerBtnView}>
            <TouchableOpacity onPress={()=> navigation.navigate('AddMoneyPage')}> 
                <Text style={styles.registerBtnTxt}>Login</Text>
            </TouchableOpacity>
          </View>

        <View style={styles.geustLinkView}> 
        <TouchableOpacity onPress={()=>navigation.navigate('RegisterPage')}>
         <Text style={[styles.geustLinkTxtMain]}> Don't Have an account?
          <Text style={styles.geustLinkTxt}> Register Now</Text>
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
  marginBottom:wp(1)
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
