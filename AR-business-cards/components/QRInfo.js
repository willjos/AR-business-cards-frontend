import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useState } from "react";
import CreateEdit from "./CreateEdit";

export default function QRInfo({ code, currentUser }) {
  const [editPressed, setEditPressed] = useState(false);

  const handleEditPress = () => {
    setEditPressed(!editPressed);
  };

  return (
    <View style={styles.QRContainer}>
      <QRCode value={code.id.toString()} />
      <View style={styles.infoContainer}>
        <Text>{code.title.toString()}</Text>
        {!editPressed ? (
          <Button title="Edit" onPress={handleEditPress} />
        ) : (
          <CreateEdit currentUser={currentUser} id={code.id} isCreate={false} />
        )}
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
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 70,
    flexDirection: "row",
  },
});
