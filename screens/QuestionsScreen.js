import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import CustomListItem from "./components/CustomListItem";
import { useQuestions } from "./hooks/useQuestions";
import LoadingIndicator from "./components/LoadingIndicator";

function QuestionsScreen({ navigation, route }) {
  const [questions] = useQuestions(route);

  if (questions === null) {
    return <LoadingIndicator />;
  }

  if (!questions) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No questions has been created yet.</Text>

        <Button
          buttonStyle={{ height: 70, width: 70 }}
          containerStyle={styles.button}
          icon={<Icon name="plus" size={30} color="white" />}
          onPress={() =>
            navigation.navigate("AddQuestion", { quizId: route.params.id })
          }
        />
      </View>
    );
  }

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
        {questions.map(({ id, data: { question, type, points, timer } }) => (
          <CustomListItem
            key={id}
            title={`${question} - ${points} Points`}
            subtitle={`${type} Choice Question - ${timer} Secs`}
            redirect={() => navigation.navigate("Questions", { id })}
          />
        ))}
      </ScrollView>

      <Button
        buttonStyle={{ height: 70, width: 70 }}
        containerStyle={styles.button}
        icon={<Icon name="plus" size={30} color="white" />}
        onPress={() =>
          navigation.navigate("AddQuestion", { quizId: route.params.id })
        }
      />
    </SafeAreaView>
  );
}

export default QuestionsScreen;

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
