import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function HomePage() {
  return (
    <View>
      <Text>Hello, UserName!</Text>
      <Button title="Make Card" />
      <Button title="View your QR Code" />
      <Button title="View Business Card" />
    </View>
  );
}
