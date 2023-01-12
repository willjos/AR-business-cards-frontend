import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import ArCardView from "./ArCardView";
import QRScanner from "./QRScanner";

export default function HomePage() {
  const [viewFeature, setViewFeature] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [viewQR, setViewQR] = useState(false);
  const [qrData, setQRData] = useState("QR Data");

  function handleViewCardPress() {
    setViewCard(true);
    setViewFeature(true);
  }

  function handleViewQRPress() {
    setViewQR(true);
    setViewFeature(true);
  }

  function handleQRData(data) {
    setQRData(data);
  }

  if (viewFeature) {
    if (viewCard) {
      return (
        <>
          <ArCardView />
        </>
      );
    } else if (viewQR) {
      return <QRScanner setQRData={handleQRData} />;
    }
  } else {
    return (
      <View>
        <Text>Hello, UserName!</Text>
        <Button title="View Business Card" onPress={handleViewCardPress} />
        <Button title="View QR Code" onPress={handleViewQRPress} />
      </View>
    );
  }
}
