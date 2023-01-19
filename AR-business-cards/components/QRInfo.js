import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function QRInfo({ card, navigation, handleOpenAR }) {
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
    <View style={styles.QRContainer}>
      <View style={styles.qrCode}>
        <QRCode value={card.id.toString()} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{card.title}</Text>
        <View style={styles.hairline}></View>

        <View style={styles.buttonContainer}>
          <View>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && {
                  backgroundColor: "#FCA311",
                  borderColor: "#14213D",
                },
              ]}
              onPress={handleEditPress}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </Pressable>
            <View style={styles.buttonHairline}></View>
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
              <Text style={styles.buttonText}>View</Text>
            </Pressable>
            <View style={styles.buttonHairline}></View>
          </View>
        </View>
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
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 40,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 3,
    width: 75,
    height: 55,
    backgroundColor: "#14213D",
    borderColor: "#14213D",
    marginRight: 20,
  },
  buttonText: {
    marginLeft: 0,
    color: "#FFFCF2",
    fontFamily: "PlusJakartaSans",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "PlusJakartaSans",
    color: "#14213D",
    marginBottom: 4,
  },
  hairline: {
    backgroundColor: "#A2A2A2",
    height: 0.5,
    width: 175,
    marginBottom: 15,
  },
  buttonHairline: {
    backgroundColor: "#14213D",
    height: 4,
    width: 75,
    marginBottom: 15,
  },
  qrCode: {
    marginTop: 0,
  },
});
