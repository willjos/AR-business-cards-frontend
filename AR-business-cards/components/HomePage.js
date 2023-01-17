import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";


export default function HomePage({ navigation, handleUserStorage }) {

  const [qrData, setQRData] = useState("QR Data");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button
          style={styles.text}
          title="View Business Card"
          onPress={() => navigation.navigate("QRScanner", { setQRData })}
        />
      </View>

      <View style={styles.box}>
        <Button
          style={styles.text}
          title="View QR Codes"
          onPress={() => navigation.navigate("QRGenerator")}
        />
      </View>
      <View style={styles.box}>
        <Button
          style={styles.text}
          title="Create card"
          onPress={() => navigation.navigate("CreateCard")}
        />
      </View>
      <View style={styles.box}>
        <Button
          style={styles.text}
          title="Log Out"
          onPress={() => {

            handleUserStorage(null);

          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 70,
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
});
