import { StyleSheet, Text, View, Button } from "react-native";

export default function CollectedCardInfo({ card, handleOpenAR }) {
  const handleViewPress = () => {
    console.log("navigate to AR");
  };

  return (
    <View style={styles.CardContainer}>
      <View style={styles.infoContainer}>
        <Text>{card.title}</Text>
        <Text>made by: {card.username} </Text>
        <Text>Scanned at: {card.scan_timestamp}</Text>
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
  CardContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 70,
    flexDirection: "row",
  },
});
