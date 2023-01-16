import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function QRInfo({ code }) {
  console.log(code);
  const title = "placeHolder";
  return (
    <View style={styles.QRContainer}>
      <QRCode value={code.id.toString()} />
      <View style={styles.infoContainer}>
        <Text>{code.title.toString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginLeft: 30,
    textAlignVertical: "top",
  },
  QRContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 70,
    flexDirection: "row",
  },
});
