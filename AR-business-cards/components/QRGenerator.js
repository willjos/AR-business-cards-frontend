import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";
export default function QRGenerator(props) {
  function handleBackButton() {
    console.log("back button pressed");
  }
  return (
    <View>
      <ScrollView>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
        <View style={styles.QRContainer}>
          <QRCode value={props.code} />
          <View style={styles.infoContainer}>
            <Text>QR Info Here</Text>
            <Text>QR Info Here</Text>
          </View>
        </View>
      </ScrollView>
      <Button title="Back" onPress={handleBackButton} style={styles.Button} />
    </View>
  );
}

const styles = StyleSheet.create({
  QRContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 70,
    flexDirection: "row",
  },
  infoContainer: {
    marginLeft: 30,
    textAlignVertical: "top",
  },
});
