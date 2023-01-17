import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CollectedCardInfo from "./CollectedCardInfo";

import ArCardView from "./ArCardView";

export default function CardCollection(currentUser, navigation) {
  const [openAR, setOpenAr] = useState(false);
  const [currentCardDetails, setCurrentCardDetails] = useState({});

  const [userCollection, setUserCollection] = useState([
    { title: "test 1", colour: "red", content: "lorum ipsum" },
    { title: "test 2", colour: "blue", content: "lorum ipsum" },
    { title: "test 3", colour: "green", content: "lorum ipsum" },
    { title: "test 4", colour: "yellow", content: "lorum ipsum" },
  ]);
  const handleOpenAR = (data) => {
    setCurrentCardDetails(data);
    setOpenAr(true);
  };

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
