import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import ArCardView from "./ArCardView";
import { useFonts } from "expo-font";
export default function QRScanner({ currentUser, navigation }) {
  const [scanned, setScanned] = useState(false);
  const [openAR, setOpenAR] = useState(false);
  const [cardDetails, setCardDetails] = useState(undefined);
  let [fontsLoaded] = useFonts({
    PlusJakartaSans: require("../assets/Fonts/PlusJakartaSans.ttf"),
  });
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const response = await fetch(
      `https://ar-business-cards-backend.herokuapp.com/view-card/${data}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: currentUser ? currentUser : "" }),
      }
    );
    if (response.status == 200) {
      const responseJSON = await response.json();
      await setCardDetails(responseJSON[0]);
      setOpenAR(true);
      navigation.setOptions({
        title: "Ar View",
      });
    } else {
      alert(
        `Invalid QR: The card does not exist or the QR code scanned is not valid. (for qr data: ${data})`
      );
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {openAR ? (
        <ArCardView cardDetails={cardDetails} />
      ) : (
        <View style={styles.container}>
          {scanned ? (
            <Text style={styles.text}>Scan Successful.</Text>
          ) : (
            <Text style={styles.text}>Scan a Valid QR code.</Text>
          )}
          <View style={styles.barcodeBox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>
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
    justifyContent: "flex-start",
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "center",
  },
  text: {
    marginTop: 80,
    marginLeft: 10,
    marginBottom: 30,
    color: "#14213D",
    fontSize: 20,

    fontFamily: "PlusJakartaSans",
  },
  barcodeBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#bef4e7",
  },
});
