import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Button } from "react-native";

export default function QRInfo({ card, navigation, handleOpenAR }) {
  const handleEditPress = () => {
    navigation.navigate("EditCard", { card });
  };

  return (
    <View style={styles.QRContainer}>
      <QRCode value={card.id} />
      <View style={styles.infoContainer}>
        <Text>{card.title}</Text>
        <Text>{`Scanned ${card.count} times`}</Text>
        <Button title="Edit" onPress={handleEditPress} />
        <Button
          title="View"
          onPress={() => {
            handleOpenAR(card);
          }}
        />
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
