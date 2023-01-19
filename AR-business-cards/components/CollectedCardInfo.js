import { StyleSheet, Text, View, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function CollectedCardInfo({ card, handleOpenAR, navigation }) {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans: require("../assets/Fonts/PlusJakartaSans.ttf"),
  });
  const handleEditPress = () => {
    navigation.navigate("EditCard", { card });
  };
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.CardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{card.title} </Text>
        <View style={styles.hairline}></View>
        <Text style={styles.normalText}>Made by: {card.username}</Text>
        <Text style={styles.normalText}>
          Last Scanned at: {card.scan_timestamp}
        </Text>
        <Text style={styles.normalText}>
          Total times scanned: {card.count} times
        </Text>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && {
              backgroundColor: "#FCA311",
              borderColor: "#14213D",
            },
          ]}
          onPress={() => {
            handleOpenAR(card);
          }}
        >
          <Text style={styles.buttonText}>View This Card</Text>
        </Pressable>
        <View style={styles.buttonHairline}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 10,
    textAlignVertical: "top",
  },
  CardContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 3,
    width: 300,
    height: 50,
    backgroundColor: "#14213D",
    borderColor: "#14213D",
    marginRight: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  buttonText: {
    textAlign: "center",
    marginLeft: 0,
    color: "#FFFCF2",
    fontFamily: "PlusJakartaSans",
    fontSize: 20,
  },
  buttonHairline: {
    backgroundColor: "#14213D",
    height: 4,
    width: 300,
    marginBottom: 15,
    marginLeft: 10,
  },
  title: {
    fontFamily: "PlusJakartaSans",

    color: "#14213D",
    fontSize: 22.5,
    marginBottom: 10,
  },
  normalText: {
    fontFamily: "PlusJakartaSans",
  },
  hairline: {
    backgroundColor: "#A2A2A2",
    height: 0.5,
    width: 300,
    marginBottom: 15,
  },
});
