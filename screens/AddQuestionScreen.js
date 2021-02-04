import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Platform } from "react-native";
import { ButtonGroup } from "react-native-elements";
import AddSingleQuestion from "./components/AddSingleQuestion";
import AddMultipleQuestion from "./components/AddMultipleQuestion";
import AddInputQuestion from "./components/AddInputQuestion";

function AddQuestionScreen({ navigation, route }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ["Single", "Multiple", "Input"];

  const displaySelectedComponent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <AddSingleQuestion
            quizId={route.params.quizId}
            navigation={navigation}
          />
        );
      case 1:
        return (
          <AddMultipleQuestion
            quizId={route.params.quizId}
            navigation={navigation}
          />
        );
      case 2:
        return (
          <AddInputQuestion
            quizId={route.params.quizId}
            navigation={navigation}
          />
        );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />

      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={setSelectedIndex}
      />

      {displaySelectedComponent()}
    </KeyboardAvoidingView>
  );
}

export default AddQuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
