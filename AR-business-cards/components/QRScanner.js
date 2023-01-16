import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import ArCardView from "./ArCardView";

export default function QRScanner({ route }) {
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("no data");
  const [openAR, setOpenAR] = useState(false);

  const handleBarCodeScanned = async ({ type, data }) => {
    const response = await fetch(
      `https://ar-business-cards-backend.herokuapp.com/view-card?qr=${data}`
    );
    console.log(response);
    setScanned(true);
    if (response.status == 200) {
      setText(`Scan Successful: Barcode Type ${type} data ${data}`);
      setOpenAR(true);
    } else {
      alert(
        "Invalid QR: The card does not exist or the QR code scanned is not valid."
      );
    }
  };

  const handleScanPress = () => {
    setScanned(false);
    route.params.setQRData(text);
  };

  return (
    <>
      {openAR ? (
        <ArCardView BName={text} />
      ) : (
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
              onPress={() => handleScanPress}
              color="#bef4e7"
            />
          )}
        </View>
      )}
    </>
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
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#bef4e7",
  },
});
