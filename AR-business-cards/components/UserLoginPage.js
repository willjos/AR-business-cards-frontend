import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";

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
          <Pressable onPress={handleLoginPress} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
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
          <Pressable
            style={styles.button}
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
        </View>
      )}
      {createAccountButtonRender ? (
        <View style={styles.box}>
          <Pressable style={styles.button} onPress={handleCreateAccountPress}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Register an account with us</Text>
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
            style={styles.button}
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
        </View>
      )}
      <View style={styles.box}>
        <Pressable
          style={styles.ViewBusinessCard}
          onPress={() => {
            navigation.navigate("QRScanner", { setQRData });
          }}
        >
          <Text style={styles.buttonText}>View Business Card </Text>
        </Pressable>
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
  box: {
    marginTop: 5,
    marginBottom: 20,
    height: 100,
    width: 300,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#252422",
    borderStyle: "solid",
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FCA311",
    borderColor: "#14213D",
    borderWidth: 1.5,
  },
  buttonText: {
    marginLeft: 0,
    color: "#FFFCF2",
  },

  ViewBusinessCard: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FCA311",
    borderColor: "#14213D",
    borderWidth: 1.5,
  },
});
