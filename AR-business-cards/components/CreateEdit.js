import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function CreateEdit({ currentUser, isCreate, id }) {
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
    if (isCreate) {
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
    } else {
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
        <View style={styles.doneAndPreview}>
          <Button title="Preview"></Button>
          <Button title="Submit" onPress={handleSubmitPress}></Button>
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
