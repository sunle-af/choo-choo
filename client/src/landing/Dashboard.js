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
import CardsComponets from '../components/cards';

import { auth,app } from '../../firebase';
import { doc, setDoc,updateDoc,getFirestore,getDoc,Timestamp, Firestore } from "firebase/firestore"; 
import { BarCodeScanner } from 'expo-barcode-scanner';
const db = getFirestore(app);
import { widthPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomePageStack from './HomePageStack';
import ProfilePageStack from './ProfilePageStack';
import AddMoneyPage from '../deposit/addMoney';


function HomePageTab({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <HomePageStack  navigation={navigation}   />
      </View>
    );
  }
  function ProfileTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ProfilePageStack />
      </View>
    );
  }
function AddMoneyTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <AddMoneyPage  />
      </View>
    );
  }
const Tab = createMaterialBottomTabNavigator();

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
export default function DashboardPage({navigation}) {
    return (
        <NavigationContainer>
        <MyTabs  />
      </NavigationContainer>
)
}
 

  