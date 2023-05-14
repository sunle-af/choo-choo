import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView, KeyboardAvoidingView, Alert, Button, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useState } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client";

const GRAPHQL_URL = 'http://localhost:9000/';
const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
});

const IMAGE_URI = require('../../assets/images/2.jpg');
const JOURNEY_STATES_DATA_QUERY = gql`
  query ExampleQuery  {
  journeyStatesData(id: "001001") {
    id
    balance
    cardInUse
    date
    mobileNumber
    name
    time
  }
}

`;

export default function LandingPage({navigation}){
  
  const[result,setResult] = useState('')
  const  {loading,data, error}  = useQuery(JOURNEY_STATES_DATA_QUERY,{client});

//   const [createStates,{loading,error}] = useMutation(
//     gql`
//      mutation CreateJourneyStates($input:journeyStatesInput ) {
//         createJourneyStates(input: $input) {
//           success
//           input {
//             id
//             name
//             cardInUse
//             mobileNumber
//             balance
//             date
//             time
//           }  
//         }
// }
//   ` , {client});

  if(loading) return(
    <View style={styles.container}>
      <Text>Loading.....</Text>
    </View>
    )
    
  const punchMeHandler=()=>{
      console.log(data)
  }
  const createStatesBtnHandler=()=>{
    const input={
        "id":Date.now(),
        "name":"xxxUser",
        "mobileNumber":"0700071234",
        "cardInUse":"false",
        "balance":"10000",
        "date":"28/04/2023",
        "time":"10:10"
    }
    createStates({variables:{input}}).then(()=>alert('Done')).catch(err=>{console.log(err);  alert(err)}
    )
  }
  return(
    <ApolloProvider client={client}>
            <ImageBackground source={IMAGE_URI} style={{flex:1}}>
                  <View style={styles.container}>
                    <View>
                        <TouchableOpacity style={styles.btnStyle} onPress={punchMeHandler}>
                            <Text style={{ color: 'white' }}>Punch Me </Text>
                        </TouchableOpacity>
                        <View style={{margin:30}}>
                              {
                              result!=''?<Text style={{margin:40, color: 'white' }}>{result} </Text>:<Text></Text>
                               }
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnStyle} onPress={createStatesBtnHandler}>
                            <Text style={{ color: 'white' }}>Mutation  </Text>
                        </TouchableOpacity>
                        <View style={{margin:30}}>
                              {
                              result!=''?<Text style={{margin:40, color: 'white' }}>{result} </Text>:<Text></Text>
                               }
                        </View>
                    </View>
                        
                        
                  </View>

            </ImageBackground>
    </ApolloProvider>
    )  
}
const styles = StyleSheet.create({
    container:{
      flex:1, 
      justifyContent:'space-around',
      alignItems:'center'
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
 