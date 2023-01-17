import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import ArCardView from "./ArCardView";

export default function QRScanner({ currentUser }) {
  const [scanned, setScanned] = useState(false);
  const [openAR, setOpenAR] = useState(false);
  const [cardDetails, setCardDetails] = useState({});

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const response = await fetch(
      `https://ar-business-cards-backend.herokuapp.com/view-card/${data}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: currentUser }),
      }
    );
    if (response.status == 200) {
      const responseJSON = await response.json();
      console.log(`Scan Successful: Barcode Type ${type} data ${data}`);
      console.log(responseJSON);
      await setCardDetails(responseJSON[0]);
      setOpenAR(true);
    } else {
      alert(
        `Invalid QR: The card does not exist or the QR code scanned is not valid. (for qr data: ${data})`
      );
    }
  };

  const handleScanPress = () => {
    setScanned(false);
  };

  useEffect(() => {
    console.log("scanned" + scanned);
  }, [scanned]);

  return (
    <>
      {openAR ? (
        <ArCardView cardDetails={cardDetails} />
      ) : (
        <View style={styles.container}>
          <View style={styles.barcodeBox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>
          {scanned && (
            <Button
              title={"Scan again"}
              onPress={() => {
                handleScanPress();
              }}
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
