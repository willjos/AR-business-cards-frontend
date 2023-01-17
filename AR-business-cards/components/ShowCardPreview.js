import { View, Text } from "react-native";

export default function ShowCardPreview({ colour, title, content }) {
  return (
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
  );
}
