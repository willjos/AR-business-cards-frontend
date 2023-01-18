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
import ColorPicker from "react-native-wheel-color-picker";

export default function CreateCard({ currentUser }) {
  const [title, setTitle] = useState("");
  const [colour, setColour] = useState("");
  const [content, setContent] = useState("");

  const [maxLenTitle, setMaxLenTitle] = useState(false);
  const [maxLenContent, setMaxLenContent] = useState(false);

  const handleColourInput = (colour) => {
    setColour(colour);
  };
  const handleTitleInput = (title) => {
    setTitle(title);

    if (title.length == 50) {
      setMaxLenTitle(true);
    } else {
      setMaxLenTitle(false);
    }
  };
  const handleContentInput = (content) => {
    setContent(content);

    if (content.length == 200) {
      setMaxLenContent(true);
    } else {
      setMaxLenContent(false);
    }
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
        <View style={styles.paddingView}>
          <View style={styles.titleBox}>
            <TextInput
              onChangeText={(text) => handleTitleInput(text)}
              placeholder="Enter Title..."
              placeholderTextColor="grey"
              maxLength={50}
            />
          </View>
          {maxLenTitle && (
            <Text style={styles.warningText}>
              Max Length Reached. Cannot enter any more characters.
            </Text>
          )}
        </View>

        <Text style={styles.text}>Colour</Text>
        <View style={styles.colourBox}>
          <ColorPicker
            onColorChange={handleColourInput}
            thumbSize={50}
            sliderSize={30}
            gapSize={10}
            noSnap={true}
          />
        </View>
        <Text style={styles.text}>Description</Text>
        <View style={styles.paddingView}>
          <View style={styles.detailBox}>
            <TextInput
              onChangeText={(text) => handleContentInput(text)}
              style={{ padding: 10 }}
              placeholder="Enter content.."
              placeholderTextColor="grey"
              multiline={true}
              numberOfLines={4}
              maxLength={200}
            />
          </View>
          {maxLenContent && (
            <Text style={styles.warningText}>
              Max Length Reached. Cannot enter any more characters.
            </Text>
          )}
        </View>
        <Text style={styles.text}>Preview</Text>
        <ShowCardPreview colour={colour} title={title} content={content} />
        <Button title="Create" onPress={handleSubmitPress}></Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    marginTop: 5,
    marginLeft: 30,
    marginBottom: 0,
    height: 80,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#dddddd",
    padding: 20,
  },
  colourBox: {
    marginTop: 5,
    marginBottom: 15,
    height: 310,
    width: 350,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
  },
  detailBox: {
    marginLeft: 30,
    marginTop: 5,
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
  warningText: {
    marginLeft: 30,
    marginTop: 1,
    fontSize: 13,
    color: "red",
    maxWidth: 300,
  },
  paddingView: {
    marginBottom: 40,
  },
});
