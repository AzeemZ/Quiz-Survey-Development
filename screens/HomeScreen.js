import React, { useState, useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Text, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { auth } from "../firebase";
import CustomListItem from "./components/CustomListItem";

function HomeScreen({ navigation }) {
  const signOutUser = () => {
    auth.signOut();
  };

  useEffect(() => {}, []);

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
            <Text
              style={{
                color: "#fff",
                marginRight: 20,
                fontWeight: "900",
                fontSize: 16,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text h3>
        Quiz
        <Text h3 style={{ color: "rgb(32, 137, 220)" }}>
          Survey
        </Text>{" "}
        Development
      </Text>

      <ScrollView style={styles.list}>
        <CustomListItem />
      </ScrollView>

      <Button
        buttonStyle={{ height: 70, width: 70 }}
        containerStyle={styles.button}
        icon={<Icon name="plus" size={30} color="white" />}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
  },
  list: {
    alignSelf: "stretch",
    marginVertical: 15,
  },
  button: {
    borderRadius: 100,
    position: "absolute",
    bottom: 35,
    right: 30,
  },
});
