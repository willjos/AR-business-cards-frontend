import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import ArCardView from "./ArCardView";
import QRScanner from "./QRScanner";

export default function HomePage() {
  const [viewFeature, setViewFeature] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [viewQR, setViewQR] = useState(false);

  function handleViewCardPress() {
    setViewCard(true);
    setViewFeature(true);
  }

  function handleViewQRPress() {
    setViewQR(true);
    setViewFeature(true);
  }

  if (viewFeature) {
    if (viewCard) {
      return (
        <>
          <ArCardView />
        </>
      );
    } else if (viewQR) {
      return <QRScanner />;
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
