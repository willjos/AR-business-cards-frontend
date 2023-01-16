import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import QRInfo from "./QRInfo";
export default function QRGenerator({ currentUser }) {
  const [userCodes, setUserCodes] = useState([]);
  const title = "this is my title";
  const handleQRCodes = async () => {
    try {
      const response = await fetch(
        `https://ar-business-cards-backend.herokuapp.com/getUserQR?username=${"willsimms"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const responseJSON = await response.json();

      if (response.status === 200) {
        setUserCodes(responseJSON);
      } else {
        alert(`error ${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleQRCodes();
  }, []);
  return (
    <ScrollView>
      {userCodes && (
        <>
          {userCodes.map((e, key) => (
            <>
              <QRInfo code={e} key={key} />
            </>
          ))}
        </>
      )}
      <QRInfo code="1" />
    </ScrollView>
  );
}
