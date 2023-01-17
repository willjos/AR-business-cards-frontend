import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CollectedCardInfo from "./CollectedCardInfo";

export default function CardCollection(currentUser, navigation) {
  const [userCollection, setUserCollection] = useState([
    { tile: "test 1" },
    { tile: "test 2" },
    { tile: "test 3" },
    { tile: "test 4" },
  ]);
  return (
    <ScrollView>
      {userCollection && (
        <>
          {userCollection.map((e, key) => (
            <CollectedCardInfo
              card={e}
              key={key}
              currentUser={currentUser}
              navigation={navigation}
            />
          ))}
        </>
      )}
    </ScrollView>
  );
}
