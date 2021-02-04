import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { useAddQuiz } from "./hooks/useAddQuiz";

function AddQuizScreen({ navigation }) {
  const [title, setTitle, description, setDescription, createQuiz] = useAddQuiz(
    navigation
  );

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />

      <Text h3>
        Quiz
        <Text h3 style={{ color: "rgb(32, 137, 220)" }}>
          Survey
        </Text>{" "}
        Development
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Quiz Title"
          type="text"
          value={title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Quiz Description"
          type="text"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Button
        containerStyle={styles.button}
        title="Create Quiz"
        onPress={createQuiz}
        raised
      />
    </KeyboardAvoidingView>
  );
}

export default AddQuizScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 50,
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 15,
  },
});
