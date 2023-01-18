import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserLoginPage from "./components/UserLoginPage";
import HomePage from "./components/HomePage";
import QRScanner from "./components/QRScanner";
import QRGenerator from "./components/QRGenerator";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import ArCardView from "./components/ArCardView";
import CardCollection from "./components/CardCollection";

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
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#FCA311",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
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
              options={{ title: `Scan a QR code` }}
            >
              {(props) => <QRScanner {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="QRGenerator"
              options={{ title: `View your cards` }}
            >
              {(props) => <QRGenerator {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="CardCollection"
              options={{ title: `Previously Scanned Cards` }}
            >
              {(props) => (
                <CardCollection {...props} currentUser={currentUser} />
              )}
            </Stack.Screen>
            <Stack.Screen name="CreateCard" options={{ title: `Make a card` }}>
              {(props) => <CreateCard {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen name="EditCard" options={{ title: `Edit your card` }}>
              {(props) => <EditCard {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="ArCardView"
              component={ArCardView}
              options={{ title: `AR Card View` }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <LoginStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#FCA311",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <LoginStack.Screen
              name="Login"
              options={{
                title: `Let's see Paul Allen's cARd.`,
              }}
            >
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
