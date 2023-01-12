import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";

export default function QRScanner(props) {
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("no data");

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(`Scan Succesful: Barcode Type ${type} data ${data}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && (
        <Button
          title={"Scan"}
          onPress={() => {
            setScanned(false);
          }}
          color="#bef4e7"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "center",
  },

  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#bef4e7",
  },
});
