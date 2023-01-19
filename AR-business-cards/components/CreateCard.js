import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ShowCardPreview from "./ShowCardPreview";
import ColorPicker from "react-native-wheel-color-picker";
import { useFonts } from "expo-font";

export default function CreateCard({ currentUser }) {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans: require("../assets/Fonts/PlusJakartaSans.ttf"),
  });
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <ScrollView>
        <Text style={styles.text}>Title</Text>
        <View style={styles.paddingView}>
          <TextInput
            style={styles.titleInput}
            onChangeText={(text) => handleTitleInput(text)}
            placeholder="Enter Title..."
            placeholderTextColor="grey"
            maxLength={50}
          />

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
          <TextInput
            onChangeText={(text) => handleContentInput(text)}
            style={styles.descriptionInput}
            placeholder="Enter content.."
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={4}
            maxLength={200}
          />

          {maxLenContent && (
            <Text style={styles.warningText}>
              Max Length Reached. Cannot enter any more characters.
            </Text>
          )}
        </View>
        <Text style={styles.text}>Preview</Text>
        <ShowCardPreview colour={colour} title={title} content={content} />
        <View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { backgroundColor: "#FCA311" },
            ]}
            onPress={handleSubmitPress}
          >
            <Text style={styles.buttonText}>Create</Text>
          </Pressable>
          <View style={styles.buttonHairline}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    fontFamily: "PlusJakartaSans",
    borderColor: "#14213D",
    borderWidth: 0.5,
    marginTop: 5,
    marginLeft: 30,

    height: 80,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
    padding: 20,
  },
  colourBox: {
    borderColor: "#14213D",
    borderWidth: 0.5,
    marginTop: 0,
    marginBottom: 40,
    marginLeft: 30,
    height: 310,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
    padding: 20,
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
    color: "#14213D",
    fontFamily: "PlusJakartaSans",
    marginLeft: 30,
    marginBottom: 5,
    marginTop: 5,
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
  descriptionInput: {
    fontFamily: "PlusJakartaSans",
    borderColor: "#14213D",
    borderWidth: 0.5,
    backgroundColor: "#E5E5E5",
    marginLeft: 30,
    marginTop: 5,
    height: 300,
    width: 300,
    borderRadius: 10,
    padding: 20,
    textAlignVertical: "top",
  },
  hairline: {
    backgroundColor: "#14213D",
    height: 0.5,
    width: 300,
    marginLeft: 30,
    marginTop: 0,
  },
  button: {
    marginTop: 0,
    paddingVertical: 20,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#14213D",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFCF2",
    fontFamily: "PlusJakartaSans",
  },
  buttonHairline: {
    backgroundColor: "#14213D",
    height: 4,
    width: 400,
  },
});
