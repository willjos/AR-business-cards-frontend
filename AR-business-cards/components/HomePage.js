import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import ArCardView from "./ArCardView";

export default function HomePage() {
  const [viewCard, setViewCard] = useState(false);

  function handleViewCardPress() {
    setViewCard(true);
  }

  return (
    <>
      {viewCard ? (
        <ArCardView />
      ) : (
        <View>
          <Text>Hello, UserName!</Text>
          <Button title="View Business Card" onPress={handleViewCardPress} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  CameraContainer: {
    height: "100%",
    width: "100%",
  },
});
