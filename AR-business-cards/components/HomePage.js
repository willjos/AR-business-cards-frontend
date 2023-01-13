import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import ArCardView from "./ArCardView";
import QRScanner from "./QRScanner";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function HomePage({ navigation, setCurrentUser }) {
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

  // if (viewFeature) {
  //   if (viewCard) {
  //     return (
  //       <>
  //         <ArCardView />
  //       </>
  //     );
  //   } else if (viewQR) {
  //     return <QRScanner setQRData={setQRData} />;
  //   }
  // } else {
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
          onPress={() => navigation.navigate("EditCard")}
        />
      </View>
      <View style={styles.box}>
        <Button
          style={styles.text}
          title="Log Out"
          onPress={() => {
            setCurrentUser(null);
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
