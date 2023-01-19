import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
export default function UserLoginPage({
  handleUserStorage,
  navigation,
  setQRData,
}) {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans: require("../assets/Fonts/PlusJakartaSans.ttf"),
  });

  const [loginButtonRender, setLoginButtonRender] = useState(true);
  const [createAccountButtonRender, setCreateAccountButtonRender] =
    useState(true);
  const [usernameLoginInput, setUsernameLoginInput] = useState("");
  const [passwordLoginInput, setPasswordLoginInput] = useState("");
  const [usernameCreateAccountInput, setUsernameCreateAccountInput] =
    useState("");
  const [passwordCreateAccountInput, setPasswordCreateAccountInput] =
    useState("");

  const handleLoginPress = () => {
    setLoginButtonRender(false);
    setCreateAccountButtonRender(true);
  };

  const handleSubmitPress = async (endpoint, username, password) => {
    const data = { username, password };
    const response = await fetch(
      `https://ar-business-cards-backend.herokuapp.com/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    console.log(response.json());
    if (response.status == 200) {
      handleUserStorage(data.username);
    } else {
      return alert("Access Denied");
    }
  };
  const handleCreateAccountPress = () => {
    setCreateAccountButtonRender(false);
    setLoginButtonRender(true);
  };

  const handleInputChange = (setState, value) => {
    setState(value);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {loginButtonRender ? (
        <View>
          <Pressable
            onPress={handleLoginPress}
            style={({ pressed }) => [
              styles.button,
              pressed && { backgroundColor: "#FCA311" },
            ]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View style={styles.SubmitHairline}></View>
        </View>
      ) : (
        <View>
          <Text style={styles.loginText}>Log in to your existing account</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) =>
              handleInputChange(setUsernameLoginInput, text)
            }
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) =>
              handleInputChange(setPasswordLoginInput, text)
            }
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { backgroundColor: "#FCA311" },
            ]}
            onPress={() => {
              handleSubmitPress(
                "login",
                usernameLoginInput,
                passwordLoginInput
              );
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <View style={styles.SubmitHairline}></View>
        </View>
      )}
      {createAccountButtonRender ? (
        <View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { backgroundColor: "#FCA311" },
            ]}
            onPress={handleCreateAccountPress}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
          <View style={styles.CreateAccountAndLoginHairline}></View>
        </View>
      ) : (
        <View>
          <Text style={styles.loginText}>Register an account with us</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) =>
              handleInputChange(setUsernameCreateAccountInput, text)
            }
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) =>
              handleInputChange(setPasswordCreateAccountInput, text)
            }
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { backgroundColor: "#FCA311" },
            ]}
            onPress={() =>
              handleSubmitPress(
                "register-user",
                usernameCreateAccountInput,
                passwordCreateAccountInput
              )
            }
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <View style={styles.SubmitHairline}></View>
        </View>
      )}
      <View style={styles.BusinessCardContainer}>
        <Text style={styles.noAccountMessage}>No account?</Text>
        <Text style={styles.noAccountMessageBottom}>
          Just press the button below and scan a valid qr code.
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#FCA311", borderColor: "#14213D" },
          ]}
          onPress={() => {
            navigation.navigate("QRScanner", { setQRData });
          }}
        >
          <Text style={styles.buttonText}>View Business Card </Text>
        </Pressable>
        <View style={styles.ViewBusinessCardHairline}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#14213D",
    borderStyle: "solid",
    padding: 8,
    margin: 10,
    marginLeft: 30,
    width: 200,
    backgroundColor: "#E5E5E5",
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#14213D",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFCF2",
    fontFamily: "PlusJakartaSans",
  },

  ViewBusinessCard: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#14213D",
  },
  loginText: {
    marginLeft: 30,
    color: "#14213D",
    fontFamily: "PlusJakartaSans",
  },
  noAccountMessage: {
    marginLeft: 0,
    color: "#14213D",
    fontSize: 30,
    width: 140,
    fontFamily: "PlusJakartaSans",
  },
  noAccountMessageBottom: {
    marginLeft: 0,
    marginBottom: 10,
    color: "#14213D",
    fontFamily: "PlusJakartaSans",
  },
  ViewBusinessCardHairline: {
    borderRadiusBottom: 100,
    backgroundColor: "#14213D",
    height: 4,
    width: 260,
    marginBottom: 40,
  },
  CreateAccountAndLoginHairline: {
    borderRadiusBottom: 100,
    backgroundColor: "#14213D",
    height: 4,
    width: 260,
    marginBottom: 0,
  },
  SubmitHairline: {
    borderRadiusBottom: 100,
    backgroundColor: "#14213D",
    height: 4,
    width: 260,
    marginBottom: 15,
  },
  BusinessCardContainer: {
    marginTop: 30,
    width: 260,
    height: 260,
  },
});
