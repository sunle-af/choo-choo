import { useState } from 'react';
import {  Text, TextInput,Alert,Modal, View,StyleSheet,Pressable,Image, TouchableOpacity,Dimensions } from 'react-native';
import CardsComponets from '../components/cards';

import { auth,app } from '../../firebase';
import { doc, setDoc,updateDoc,getFirestore,getDoc,Timestamp, Firestore } from "firebase/firestore"; 
import { BarCodeScanner } from 'expo-barcode-scanner';
const db = getFirestore(app);

import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function AddMoneyPage({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

    let [userDeposit,setUserDeposit]=useState(0);
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

    const successAlert = () =>
    Alert.alert('SUCESS', 'Your Card is Now a Little Richer, Chuckle-cheeks!', [
      
      {text: 'OK', onPress: () => navigation.navigate('AddMoneyPage')},
    ]);

    const thousandBtnHandler=()=>{
      setUserDeposit(1000)
    }
    const twothousandBtnHandler=()=>{
      setUserDeposit(2000)
    }
    const tenthousandBtnHandler=()=>{
      setUserDeposit(10000)
    }

    return (
             <View style={styles.container}>
                <View style={styles.cardsView}>
                <CardsComponets />
               </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                                <View style={styles.inputView}>
                                <TextInput style={styles.inputStyle} onChangeText={num=>setUserDeposit(num)}  value={userDeposit} placeholder='Enter Amount' />
                                </View>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>ADD MONEY</Text>
                            </Pressable>

                        </View>

                    </View>
                </Modal>
                    <Text>{userDeposit}</Text>
                <View style={{flex:1, borderWidth:0.3,borderRadius:8,borderColor:'#F5EAEA', backgroundColor:'rgba(58, 152, 185, 0.001)'}}>
                <Text style={{fontWeight:'700', fontSize:36,fontFamily:'Urbanist', textAlign:'center', }}>Add Money</Text>
                <Text style={{fontSize:18,fontFamily:'Urbanist', textAlign:'center', fontWeight:'600'}}>How much would you like to add?</Text>
               
                        <View style={styles.buttonsTabsView}>
                                <View style={styles.rowOneView}>
                                    <TouchableOpacity onPress={thousandBtnHandler} style={styles.pillBtnStyle}>
                                        <Text style={styles.btnTxt} >1000</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={twothousandBtnHandler} style={styles.pillBtnStyle}>
                                        <Text style={styles.btnTxt}>2000</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.rowOneView}>
                                    <TouchableOpacity onPress={tenthousandBtnHandler} style={styles.pillBtnStyle}>
                                        <Text style={styles.btnTxt} >10,000</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} 
                                    style={[styles.pillBtnStyle, {backgroundColor:'#F53E02'}]}>
                                        <Text style={styles.btnTxt}>Other</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                               
                        </View>
                </View>
             </View>
    );
  }
  const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:wp(5),
    backgroundColor: 'white',
    },
    cardsView:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    },
    inputView:{
       width:'100%'
    },
    inputStyle:{
        borderWidth:1,
        borderColor:'#E8ECF4',
        borderRadius:15,
        marginBottom:20,
        padding:14,
        textAlign:'center',
        backgroundColor:'#F7F8F9'
      },
      buttonsTabsView:{
        flex:1,
      },
      rowOneView:{
        flex:1,flexDirection:'row',justifyContent:'space-around',margin:wp(1),alignItems:'center'
      },
        titleView:{
            paddingVertical:10,
        },
        centeredView:{
            padding:20,
            justifyContent:'space-around',
            alignItems:'center',
            flex:1,
        },
        modalView: {
            alignSelf:'center',
            margin: 20,
            width:'80%',
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },
          button: {
            borderRadius: 10,
            padding: 15,
            elevation: 2,
          },
          buttonOpen: {
            backgroundColor: '#F194FF',
          },
          buttonClose: {
            backgroundColor: '#2196F3',
          },
          textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          },
          modalText: {
            marginBottom: 15,
            textAlign: 'center',
          },
          pillBtnStyle:{
            width:wp(40),
            height:hp(5),
            justifyContent:'space-around',
            alignItems:'center', 
            borderRadius:10,
             textAlign:'center',
             color:'white', 
             backgroundColor:'#5677FF'
          },
          btnTxt:{fontFamily:'Urbanist', fontWeight:'bold', color:'white'}

  });
  