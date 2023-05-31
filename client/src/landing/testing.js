import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    Button,
    ImageBackground
} from 'react-native';
import {widthPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useState,useEffect} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {gql} from "@apollo/client";
import {useQuery, useMutation} from "@apollo/client";
const GRAPHQL_URL = 'http://192.168.0.97:3000/graphql';
const client = new ApolloClient({uri: GRAPHQL_URL, cache: new InMemoryCache()});

// Define the GraphQL query
const ExampleQuery = gql`
  query ExampleQuery {
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

// React Native component to fetch and display the data
const MyComponent = () => {
  const { loading, error, data } = useQuery(ExampleQuery);

  useEffect(() => {
    if (!loading && data) {
      // Data fetched successfully, do something with it
      console.log(data);
    }
  }, [loading, data]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>  {error.message}</Text>
      </View>
    );
  }

  // Render your component with the fetched data
  return (
    <View>
      <Text>ID: {data.journeyStatesData.id}</Text>
      <Text>Balance: {data.journeyStatesData.balance}</Text>
      <Text>Card in Use: {data.journeyStatesData.cardInUse}</Text>
      <Text>Date: {data.journeyStatesData.date}</Text>
      <Text>Mobile Number: {data.journeyStatesData.mobileNumber}</Text>
      <Text>Name: {data.journeyStatesData.name}</Text>
      <Text>Time: {data.journeyStatesData.time}</Text>
    </View>
  );
};

export default function TestingPage({navigation}) {

    return (
        <ApolloProvider client={client}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                 <MyComponent />
            </View>
        </ApolloProvider>
    )

}