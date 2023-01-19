import { StyleSheet, View, Pressable, Text } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function HomePage({ navigation, handleUserStorage }) {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans: require("../assets/Fonts/PlusJakartaSans.ttf"),
  });
  const [qrData, setQRData] = useState("QR Data");
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#FCA311", borderColor: "#14213D" },
          ]}
          onPress={() => navigation.navigate("QRScanner")}
        >
          <Text style={styles.buttonText}>View Business Card</Text>
        </Pressable>
        <View style={styles.hairline}></View>
      </View>

      <View style={styles.box}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#FCA311", borderColor: "#14213D" },
          ]}
          onPress={() => navigation.navigate("QRGenerator")}
        >
          <Text style={styles.buttonText}>View QR Codes</Text>
        </Pressable>
        <View style={styles.hairline}></View>
      </View>

      <View style={styles.box}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#FCA311", borderColor: "#14213D" },
          ]}
          onPress={() => navigation.navigate("CreateCard")}
        >
          <Text style={styles.buttonText}>Create card</Text>
        </Pressable>
        <View style={styles.hairline}></View>
      </View>

      <View style={styles.box}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#FCA311", borderColor: "#14213D" },
          ]}
          onPress={() => navigation.navigate("CardCollection")}
        >
          <Text style={styles.buttonText}>View Card collection</Text>
        </Pressable>
        <View style={styles.hairline}></View>
      </View>

      <View style={styles.box}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#FCA311" },
          ]}
          onPress={() => {
            handleUserStorage(null);
          }}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>
        <View style={styles.hairline}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 70,
    height: 700,
  },
  text: {
    marginLeft: 0,
    marginTop: 10,
    fontSize: 16,
  },
  box: {
    borderRadius: 20,
    flex: 1,
    width: 300,
    height: 60,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#14213D",
  },
  buttonText: {
    marginLeft: 0,
    color: "#FFFCF2",
    fontFamily: "PlusJakartaSans",
  },
  hairline: {
    backgroundColor: "#14213D",
    height: 4,
    width: 300,
    marginBottom: 15,
  },
});
