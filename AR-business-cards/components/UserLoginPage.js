import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import * as React from "react";

export default function UserLoginPage({
  handleUserStorage,
  navigation,
  setQRData,
}) {
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

  return (
    <View style={styles.container}>
      {loginButtonRender ? (
        <View style={styles.box}>
          <Button
            style={styles.text}
            title="Log In"
            testID="Login-Button"
            onPress={handleLoginPress}
          />
        </View>
      ) : (
        <View>
          <Text>Log in to your existing account</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            testID="Username-Input"
            onChangeText={(text) =>
              handleInputChange(setUsernameLoginInput, text)
            }
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            testID="Password-Input"
            onChangeText={(text) =>
              handleInputChange(setPasswordLoginInput, text)
            }
          />
          <Button
            title="Submit"
            testID="Login-Submit-Button"
            onPress={() =>
              handleSubmitPress("login", usernameLoginInput, passwordLoginInput)
            }
          />
        </View>
      )}
      {createAccountButtonRender ? (
        <View style={styles.box}>
          <Button
            style={styles.text}
            title="Create Account"
            testID="Create-Account-Button"
            onPress={handleCreateAccountPress}
          />
        </View>
      ) : (
        <View>
          <Text>Register an account with us</Text>
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
          <Button
            title="Submit"
            onPress={() =>
              handleSubmitPress(
                "register-user",
                usernameCreateAccountInput,
                passwordCreateAccountInput
              )
            }
          />
        </View>
      )}
      <View style={styles.box}>
        <Button
          style={styles.text}
          title="View Business Card"
          testID="View-Card-Button"
          onPress={() => navigation.navigate("QRScanner", { setQRData })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginLeft: 0,
    marginTop: 10,
    fontSize: 16,
  },
  box: {
    marginTop: 5,
    marginBottom: 20,
    height: 80,
    width: 300,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
