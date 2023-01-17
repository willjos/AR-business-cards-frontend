import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginPage from "./components/UserLoginPage";
import HomePage from "./components/HomePage";
import QRScanner from "./components/QRScanner";
import QRGenerator from "./components/QRGenerator";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import ArCardView from "./components/ArCardView";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

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
                <HomePage {...props} setCurrentUser={setCurrentUser} />
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
            <Stack.Screen name="CreateCard" options={{ title: `Make a card` }}>
              {(props) => <CreateCard {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen name="EditCard" options={{ title: `Edit your card` }}>
              {(props) => <EditCard {...props} currentUser={currentUser} />}
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
                <UserLoginPage {...props} setCurrentUser={setCurrentUser} />
              )}
            </LoginStack.Screen>
          </LoginStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
const Stack = createNativeStackNavigator();

const LoginStack = createNativeStackNavigator();
