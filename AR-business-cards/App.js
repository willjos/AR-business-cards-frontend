import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";
import UserLoginPage from "./components/UserLoginPage";
import HomePage from "./components/HomePage";
import QRScanner from "./components/QRScanner";
import QRGenerator from "./components/QRGenerator";
import CreateEdit from "./components/CreateEdit";
import ArCardView from "./components/ArCardView";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [qrData, setQRData] = useState("QR Data");

  const handleUserStorage = async (user) => {
    try {
      if (user !== null) {
        await AsyncStorage.setItem("currentUser", user);
        setCurrentUser(user);
      } else {
        await AsyncStorage.removeItem("currentUser");
        setCurrentUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserFromStorage = async () => {
    try {
      const user = await AsyncStorage.getItem("currentUser");
      if (user !== null) {
        setCurrentUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserFromStorage();
  }, []);

  return (
    <>
      {currentUser ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{ title: `Hello ${currentUser}` }}
            >
              {(props) => (
                <HomePage {...props} handleUserStorage={handleUserStorage} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="QRScanner"
              component={QRScanner}
              options={{ title: `Scan a QR code` }}
            />
            <Stack.Screen
              name="QRGenerator"
              options={{ title: `View your cards` }}
            >
              {(props) => <QRGenerator {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen name="EditCard" options={{ title: `Make a card` }}>
              {(props) => <CreateEdit {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="ArCardView"
              component={ArCardView}
              options={{ title: `Ar card view` }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <LoginStack.Navigator>
            <LoginStack.Screen name="Login" options={{ title: `Welcome` }}>
              {(props) => (
                <UserLoginPage
                  {...props}
                  handleUserStorage={handleUserStorage}
                />
              )}
            </LoginStack.Screen>
            <LoginStack.Screen
              name="QRScanner"
              options={{ title: `Scan a QR code` }}
            >
              {(props) => <QRScanner {...props} setQRData={setQRData} />}
            </LoginStack.Screen>
          </LoginStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
const Stack = createNativeStackNavigator();

const LoginStack = createNativeStackNavigator();
