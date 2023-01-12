import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function UserLoginPage() {
  const [loginButtonRender, setLoginButtonRender] = useState(true);
  const [createAccountButtonRender, setCreateAccountButtonRender] =
    useState(true);

  const handleLoginPress = () => {
    setLoginButtonRender(false);
    setCreateAccountButtonRender(true);
  };
  const handleLoginSubmitPress = () => {
    console.log("send API request to login endpoint");
  };
  const handleCreateAccountPress = () => {
    setCreateAccountButtonRender(false);
    setLoginButtonRender(true);
  };
  const handleCreateAccountSubmitPress = () => {
    console.log("send API request to create-account endpoint");
  };

  return (
    <View>
      <Text>Let's see Paul Allen's card</Text>
      {loginButtonRender ? (
        <Button title="Log In" onPress={handleLoginPress} />
      ) : (
        <View>
          <Text>Log in to your existing account</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
          <Button title="Submit" onPress={handleLoginSubmitPress} />
        </View>
      )}
      {createAccountButtonRender ? (
        <Button title="Create Account" onPress={handleCreateAccountPress} />
      ) : (
        <View>
          <Text>Register an account with us</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
          <Button title="Submit" onPress={handleCreateAccountSubmitPress} />
        </View>
      )}
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
