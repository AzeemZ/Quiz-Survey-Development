import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import CustomListItem from "./components/CustomListItem";
import { useHome } from "./hooks/useHome";
import LoadingIndicator from "./components/LoadingIndicator";

function HomeScreen({ navigation, route }) {
  const [quizzes] = useHome(navigation);

  if (quizzes === null) {
    return <LoadingIndicator />;
  }

  if (!quizzes) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No quiz has been created yet.</Text>

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
        {quizzes.map(({ id, data: { title, description } }) => (
          <CustomListItem
            key={id}
            title={title}
            subtitle={description}
            redirect={() => navigation.navigate("Questions", { id })}
          />
        ))}
      </ScrollView>

      <Button
        buttonStyle={{ height: 70, width: 70 }}
        containerStyle={styles.button}
        icon={<Icon name="plus" size={30} color="white" />}
        onPress={() => navigation.navigate("AddQuiz")}
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
