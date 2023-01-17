import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CollectedCardInfo from "./CollectedCardInfo";

import ArCardView from "./ArCardView";

export default function CardCollection({ currentUser }) {
  const [openAR, setOpenAr] = useState(false);
  const [currentCardDetails, setCurrentCardDetails] = useState({});
  const [userCollection, setUserCollection] = useState([]);
  const handleOpenAR = (data) => {
    setCurrentCardDetails(data);
    setOpenAr(true);
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

    if (response.status == 200) {
      const responseJSON = await response.json();
      setUserCollection(responseJSON);
    }
  };

  useEffect(() => {
    getUserCollection();
  }, []);

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
