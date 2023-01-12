import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import ArCardView from "./ArCardView";
import QRScanner from "./QRScanner";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function HomePage(props) {
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
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello, {props.user}!</Text>
        </View>
        <View style={styles.box}>
          <Button
            style={styles.text}
            title="View Business Card"
            onPress={handleViewCardPress}
          />
        </View>
        <View style={styles.box}>
          <Button
            style={styles.text}
            title="View QR Codes"
            onPress={handleViewQRPress}
          />
        </View>
        <View style={styles.box}>
          <Button
            style={styles.text}
            title="Edit card"
            onPress={handleViewQRPress}
          />
        </View>
        <View style={styles.box}>
          <Button
            style={styles.text}
            title="Log Out"
            onPress={handleViewQRPress}
          />
        </View>
      </View>
    );
  }
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
