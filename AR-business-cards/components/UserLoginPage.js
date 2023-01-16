import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function UserLoginPage({
  setCurrentUser,
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
    console.log(response);
    if (response.status == 200) {
      setCurrentUser(data.username);
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
    <View>
      <Text>Let's see Paul Allen's card</Text>
      {loginButtonRender ? (
        <Button title="Log In" onPress={handleLoginPress} />
      ) : (
        <View>
          <Text>Log in to your existing account</Text>
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
          <Button
            title="Submit"
            onPress={() =>
              handleSubmitPress("login", usernameLoginInput, passwordLoginInput)
            }
          />
        </View>
      )}
      {createAccountButtonRender ? (
        <Button title="Create Account" onPress={handleCreateAccountPress} />
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
          title="View Business Card"
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
