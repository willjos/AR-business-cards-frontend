import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import ArCardView from "./ArCardView";

export default function HomePage() {
  const [viewCard, setViewCard] = useState(false);

  function handleViewCardPress() {
    setViewCard(true);
  }

  return (
    <View>
      <Text>Hello, UserName!</Text>
      {/* <Button title="Make Card" />
      <Button title="View your QR Code" /> */}
      {viewCard ? (
        <View style={styles.CameraContainer}>
          <ArCardView />
        </View>
      ) : (
        <Button title="View Business Card" onPress={handleViewCardPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  CameraContainer: {
    height: "100%",
    width: "100%",
  },
});
