import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ShowCardPreview from "./ShowCardPreview";

export default function EditCard({ currentUser, route }) {
  const [title, setTitle] = useState("");
  const [colour, setColour] = useState("");
  const [content, setContent] = useState("");
  const id = route.params.code.id;

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
      `https://ar-business-cards-backend.herokuapp.com/edit-card/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      return alert("Card edited");
    } else {
      return alert("Failed to edit card");
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
        <ShowCardPreview colour={colour} title={title} content={content} />
        <Button title="Submit" onPress={handleSubmitPress}></Button>
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
