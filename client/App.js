// import React, { Component } from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';


// import LandingPage from './src/landing/landingPage';
// import AddMoneyPage from './src/deposit/addMoney';
// import TestPage from './src/landing/test';
// import DashboardPage from './src/landing/Dashboard';
// import { HeaderBackButton } from '@react-navigation/elements';
// import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import HomePageStack from './src/landing/HomePageStack';
// import ProfilePageStack from './src/landing/ProfilePageStack';
// const Stack = createNativeStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="WelcomePage" component={WelcomePage} />
//       <Stack.Screen name="RegisterPage" component={RegisterPage} />
//       <Stack.Screen name="LoginPage" component={LoginPage} />
//       <Stack.Screen name="LandingPage" component={LandingPage} />
//     </Stack.Navigator>
//   );
// }

// function HomePageTab({navigation}) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <HomePageStack  navigation={navigation}   />
//       </View>
//     );
//   }
//   function ProfileTab() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <ProfilePageStack />
//       </View>
//     );
//   }
// function AddMoneyTab() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <AddMoneyPage  />
//       </View>
//     );
//   }

// const Tab = createMaterialBottomTabNavigator();
//   function MyTabs() {
//     return (
//       <Tab.Navigator
//         initialRouteName="HomePageTab"
//         activeColor="#e91e63"
//         labelStyle={{ fontSize: 12 }}
//         style={{ backgroundColor: 'tomato' }}
//       >
//         <Tab.Screen
//           name="HomePageTab"
//           component={HomePageTab}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="home" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="AddMoneyTab"
//           component={AddMoneyTab}
//           options={{
//             tabBarLabel: 'Add Money',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="bell" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="ProfileTab"
//           component={ProfileTab}
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="account" color={color} size={26} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }
// export default function App({navigation}) {
//     return (
//         <NavigationContainer>
//          <MyStack />
//       </NavigationContainer>
// )
// }

















// // const RootStack = createStackNavigator (
// //   {
// //   WelcomePage: {
// //         screen: WelcomePage, 
// //         navigationOptions: {
// //             header:()=> false,
// //         },
// //     }, 
// //     RegisterPage:{
// //       screen:RegisterPage,
// //       navigationOptions:{
// //         header:()=>false
// //       }
// //     },
// //     LoginPage:{
// //       screen:LoginPage,
// //       navigationOptions:{
// //         header:()=>false
// //       }
// //     },
// //     LandingPage:{
// //       screen:LandingPage,
// //       navigationOptions:{
// //         title: 'QR CODE',
// //         headerLeft: () => (
// //           <HeaderBackButton
// //               onPress={() => navigation.navigate('AddMoneyPage')}
// //               tintColor="white"
// //             />
// //         ),
// //         headerStyle: {
// //           backgroundColor: '#18252D',
// //         },
// //         headerTintColor: 'white',
// //       }
// //     },
// //     AddMoneyPage:{
// //       screen:AddMoneyPage,
// //       navigationOptions:{
// //         header:()=>false
// //       }
// //     },
// //     TestPage:{
// //       screen:TestPage,
// //       navigationOptions:{
// //         header:()=>false
// //       }
// //     },
// //     DashboardPage:{
// //       screen:DashboardPage,
// //       navigationOptions:{
// //         header:()=>false
// //       }
// //     },
// // }, 
// // {
// //     initialRouteName:'DashboardPage',
// // }, 
// // )

// // const  AppContainer  = createAppContainer(RootStack);
 
// // export default class  App extends React.Component{ 
// //   render(){
// //         return <AppContainer />
// //     }
// // } 

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomePage from './src/userAuth/welcomePage';
import RegisterPage from './src/userAuth/register';
import LoginPage from './src/userAuth/login';

import HomePageStack from './src/landing/HomePageStack';
import AddMoneyPage from './src/deposit/addMoney';
import ProfilePageStack from './src/landing/ProfilePageStack';
import LandingPage from './src/landing/landingPage';
  

const Stack = createNativeStackNavigator();


const Tab = createMaterialBottomTabNavigator();

function HomePageTab({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <HomePageStack  navigation={navigation}   />
    </View>
  );
}
function ProfileTab({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ProfilePageStack navigation={navigation} />
    </View>
  );
}
function AddMoneyTab({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <AddMoneyPage  navigation={navigation} />
    </View>
  );
}
   
  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="HomePageTab"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="HomePageTab"
          component={HomePageTab}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AddMoneyTab"
          component={AddMoneyTab}
          options={{
            tabBarLabel: 'Add Money',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        <Stack.Screen options={{headerShown:false}} name="WelcomePage" component={WelcomePage} />
        <Stack.Screen options={{headerShown:false}} name="LoginPage" component={LoginPage} />
        <Stack.Screen options={{headerShown:false}} name="RegisterPage" component={RegisterPage} />
        <Stack.Screen options={{headerShown:true, headerTitle:'QRCODE',headerTintColor:'white',headerStyle: {
            backgroundColor: '#00B09C',
          } }} name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
