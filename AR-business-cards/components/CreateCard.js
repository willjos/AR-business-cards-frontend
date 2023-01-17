import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function CreateCard({ currentUser }) {
  const [title, setTitle] = useState("");
  const [colour, setColour] = useState("");
  const [content, setContent] = useState("");

  const handleColourInput = (colour) => {
    setColour(colour);
  };
  const handleTitleInput = (title) => {
    setTitle(title);
  };
  const handleContentInput = (content) => {
    setContent(content);
  };

  const handleSubmitPress = async () => {
    const data = {
      username: currentUser,
      title,
      colour,
      content,
    };
    const response = await fetch(
      `https://ar-business-cards-backend.herokuapp.com/create-card`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      return alert("Card created");
    } else {
      return alert("Failed to create card");
    }
  };

  return (
    <View>
      <ScrollView>
        <Text style={styles.text}>Title</Text>
        <View style={styles.titleBox}>
          <TextInput
            onChangeText={(text) => handleTitleInput(text)}
            placeholder="Enter Title..."
            placeholderTextColor="grey"
          />
        </View>
        <Text style={styles.text}>Colour</Text>
        <View style={styles.titleBox}>
          <TextInput
            onChangeText={(text) => handleColourInput(text)}
            placeholder="Enter Hex code..."
            placeholderTextColor="grey"
          />
        </View>
        <Text style={styles.text}>Description</Text>
        <View style={styles.detailBox}>
          <TextInput
            onChangeText={(text) => handleContentInput(text)}
            style={{ padding: 10 }}
            placeholder="Enter content.."
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <Text style={styles.text}>Preview</Text>
        <View
          style={{
            marginLeft: 30,
            marginTop: 5,
            marginBottom: 40,
            alignItems: "center",
            justifyContent: "flex-start",
            height: 200,
            width: 300,
            overflow: "hidden",
            borderWidth: 0.19,
            backgroundColor: `${colour}`,
          }}
        >
          <Text style={{ marginTop: 18 }}>{title}</Text>
          <Text style={{ marginTop: 18 }}>{content}</Text>
        </View>
        <Button title="Create" onPress={handleSubmitPress}></Button>
      </ScrollView>
      <Button title="Back"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    marginTop: 5,
    marginLeft: 30,
    marginBottom: 40,
    height: 80,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#dddddd",
    padding: 20,
  },
  detailBox: {
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 40,
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#dddddd",
    padding: 20,
  },

  text: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 16,
  },
});
