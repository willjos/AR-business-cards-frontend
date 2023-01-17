import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Button } from "react-native";

export default function QRInfo({ code, navigation }) {
  const handleEditPress = () => {
    navigation.navigate("EditCard", { code });
  };

  return (
    <View style={styles.QRContainer}>
      <QRCode value={code.id.toString()} />
      <View style={styles.infoContainer}>
        <Text>{code.title.toString()}</Text>
        <Button title="Edit" onPress={handleEditPress} />
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
