import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";

export default function CreateEdit() {
  const [title, setTitle] = useState("");
  const [colour, setColour] = useState("");
  const [details, setDetails] = useState("");

  const handleColourInput = (colour) => {
    setColour(colour);
  };
  const handleTitleInput = (title) => {
    setTitle(title);
  };
  const handleDetailsInput = (details) => {
    setDetails(details);
  };
  return (
    <View>
      <ScrollView>
        <Text style={styles.text}>Title</Text>
        <View style={styles.titleBox}>
          <TextInput
            onChange={handleTitleInput}
            placeholder="Enter Title..."
            placeholderTextColor="grey"
          />
        </View>

        <Text style={styles.text}>Colour</Text>
        <View style={styles.titleBox}>
          <TextInput
            onChange={handleTitleInput}
            placeholder="Enter Hex code..."
            placeholderTextColor="grey"
          />
        </View>
        <Text style={styles.text}>Extra(4 lines)</Text>
        <View style={styles.detailBox}>
          <TextInput
            onChange={handleDetailsInput}
            style={{ padding: 10 }}
            placeholder="Enter Details.."
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={styles.doneAndPreview}>
          <Button title="Preview"></Button>
          <Button title="Create"></Button>
        </View>
      </ScrollView>
      <Button title="Back"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    marginTop: 5,
    marginBottom: 40,
    height: 80,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  detailBox: {
    marginTop: 5,
    marginBottom: 40,
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },

  doneAndPreview: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "space-around",
    padding: 70,
    flexDirection: "row",
  },

  text: {
    marginLeft: 10,
    marginTop: 0.5,
    fontSize: 16,
  },
});
