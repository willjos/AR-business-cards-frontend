import { StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CollectedCardInfo from "./CollectedCardInfo";
import ArCardView from "./ArCardView";

export default function CardCollection({ currentUser, navigation }) {
  const [openAR, setOpenAr] = useState(false);
  const [currentCardDetails, setCurrentCardDetails] = useState({});
  const [userCollection, setUserCollection] = useState([]);
  const handleOpenAR = (data) => {
    setCurrentCardDetails(data);
    setOpenAr(true);
    // navigation.navigate("ArCardView", (cardDetails = { cardDetails }));
  };

  const getUserCollection = async () => {
    const response = await fetch(
      `https://ar-business-cards-backend.herokuapp.com/view-collection`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: currentUser }),
      }
    );
    console.log(response.status);
    if (response.status == 200) {
      const responseJSON = await response.json();
      setUserCollection(responseJSON);
    }
  };

  useEffect(() => {
    getUserCollection();
  }, []);

  useEffect(() => {
    if (openAR === true) {
      navigation.setOptions({
        title: "Ar View",
      });
    } else if (openAR === false) {
      navigation.setOptions({
        title: "Previously Scanned Cards",
      });
    }
  }, [openAR]);

  return (
    <>
      {openAR ? (
        <ArCardView cardDetails={currentCardDetails} />
      ) : (
        <ScrollView>
          {userCollection && (
            <>
              {userCollection.map((e, key) => (
                <CollectedCardInfo
                  card={e}
                  key={key}
                  currentUser={currentUser}
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
