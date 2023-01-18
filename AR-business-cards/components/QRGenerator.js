import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import QRInfo from "./QRInfo";
import ArCardView from "./ArCardView";

export default function QRGenerator({ currentUser, navigation }) {
  const [userCards, setUserCards] = useState([]);
  const [openAR, setOpenAr] = useState(false);
  const [currentCardDetails, setCurrentCardDetails] = useState({});

  const handleOpenAR = (data) => {
    setCurrentCardDetails(data);
    setOpenAr(true);
  };

  const handleQRCodes = async () => {
    try {
      const response = await fetch(
        `https://ar-business-cards-backend.herokuapp.com/getUserQR?username=${currentUser}`,
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
        setUserCards(responseJSON);
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
    <>
      {openAR ? (
        <ArCardView cardDetails={currentCardDetails} />
      ) : (
        <ScrollView>
          {userCards && (
            <>
              {userCards.map((e, key) => (
                <QRInfo
                  card={e}
                  key={key}
                  currentUser={currentUser}
                  navigation={navigation}
                  handleOpenAR={handleOpenAR}
                />
              ))}
            </>
          )}
        </ScrollView>
      )}
    </>
  );
}
