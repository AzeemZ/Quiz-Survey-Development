import React, { useState, useEffect, useLayoutEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { auth, db } from "../../firebase";

const useHome = (navigation) => {
  const [quizzes, setQuizzes] = useState(null);

  const signOutUser = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("quizzes")
      .where("uid", "==", auth.currentUser.uid)
      .onSnapshot((snapshot) => {
        setQuizzes(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 20 }} activeOpacity={0.5}>
          <Avatar
            rounded
            source={{
              uri:
                "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity onPress={signOutUser}>
            <Icon
              style={{ marginRight: 25 }}
              name="logout"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return [quizzes];
};

export { useHome };
