import { StyleSheet, Text, View,Image,Dimensions, TouchableOpacity,ScrollView, KeyboardAvoidingView, Alert, Button, ImageBackground } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useState , useEffect} from 'react';
import { auth,app } from '../../firebase';
import { doc, setDoc,updateDoc,getFirestore,getDoc,Timestamp, Firestore } from "firebase/firestore"; 
import { BarCodeScanner } from 'expo-barcode-scanner';
const db = getFirestore(app);
import { StatusBar } from 'react-native';
const IMAGE_URI = require('../../assets/images/2.jpg');
 export default function LandingPage({navigation}){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scannerSize =Math.min(windowWidth * 1, windowHeight * 1, 400);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  // {
  //  https://www.codepunker.com/tools/string-converter
  //   "base64": "dmFsaWRRckZvclNjYW4=",
  //   "url": "validQrForScan"
  //  }
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(data==='dmFsaWRRckZvclNjYW4='){
      // alert(data)
      addNewUpdatedRecord()
    } 
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const addNewUpdatedRecord=async()=>{
    const myUserDb = doc(db, "userdata", auth.currentUser.uid);
    try {
      const docSnap = await getDoc(myUserDb);
      if (docSnap.exists())
                {
                  const existingData = docSnap.data().userData || [];
                  console.log(existingData)
                  let size = existingData.length-1;
                  let balance = existingData[size].balance;
                  
                  if(balance>140){
                    const newData = [{
                      balance: existingData[size].cardInUse==false?balance:balance-140 ,
                      cardInUse: !(existingData[size].cardInUse),
                      firstName:existingData[size].firstName ,
                      lastName:existingData[size].lastName,
                      mobileNumber:existingData[size].mobileNumber,
                      email:existingData[size].email,
                      time:Timestamp.now()
                      }]
                    const updatedData = [...existingData, ...newData];
                    await updateDoc(myUserDb, { userData: updatedData });
                            if(existingData[size].cardInUse){
                              alert(`Wish You a happy Journey Your Card Balance is ${existingData[size].balance}
                              ` )
                            }
                            else{
                              alert(`Thank You For travelling with us Your Card Balance is ${existingData[size].balance}
                            ` )
                            }
                  }else{
                    // navigation.navigate()
                    alert('Please Recharge Your Card')
                  }
                } 

      else {
        console.log("Document does not exist!");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  }
  return(<>
    <View style={styles.container}>
              <View style={{width:'100%',height:'100%' }}>
                <View style={{width:'100%',borderColor:'#0CA996',borderBottomWidth:2, height:'10%',justifyContent:'space-around',alignItems:'center',  backgroundColor:'#232D36'}}>
                  <Text style={styles.titleTxt}> Scan QR </Text>
                </View>
                <View style={{width:'100%',height:'90%', backgroundColor:'grey'}}>
                <View style={{width:'100%', height:'100%' }}>
                       <BarCodeScanner
                         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                         style={StyleSheet.absoluteFillObject}
                       /> 
                       <View style={{alignItems:'center'}}> 
                 {scanned && <TouchableOpacity onPress={() => setScanned(false)}  style={styles.registerBtnView} > 
                             <Text style={styles.registerBtnTxt}>SCAN A VALID QR</Text>
                         </TouchableOpacity>
                         }
                      </View>
                 </View>
                </View>
                 {/*  */}
              </View>
                 
               </View>
  </>
               
    )  
}

const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      justifyContent:'space-around'
    }, 
    titleTxt:{ 
      color:'white',
      fontFamily:'Urbanist',
      fontWeight:'700',
      fontSize:20,
      margin:10
    },
    registerBtnView:{
      justifyContent:'space-around',
      alignItems:'center',
      width: widthPercentageToDP(90),
      padding:wp(4),
      margin:10,
      borderRadius:10,
      backgroundColor:'#1E232C'
    },registerBtnTxt:{
      fontWeight:'600',
      fontFamily:'Urbanist',
      fontSize:15,
      color:'white'
    },
    scannerContainer: {
      justifyContent: 'space-around',
      margin:widthPercentageToDP(10)
    },cardsView:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
  },
    btnStyle:{
      width:wp(40),
      borderWidth: 1,
      borderColor: 'white',
      padding: 20,
      borderRadius: 20,
      margin:10,
      backgroundColor: 'rgba(152, 223, 214, 0.1)',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
});
 