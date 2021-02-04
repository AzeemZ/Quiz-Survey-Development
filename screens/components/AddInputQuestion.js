import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { db } from "../../firebase";

const AddInputQuestion = ({ quizId, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(0);

  const clearFields = () => {
    setQuestion("");
    setAnswer("");
    setPoints("");
    setTimer("");
  };

  const createQuestion = async () => {
    await db
      .collection("quizzes")
      .doc(quizId)
      .collection("questions")
      .add({
        question,
        points,
        timer,
        type: "Input",
        answer,
      })
      .then(() => clearFields())
      .catch((error) => alert(error));
  };

  const addAnother = async () => {
    await createQuestion();
  };

  const submit = async () => {
    await createQuestion();
    navigation.navigate("Questions", { id: quizId });
  };

  return (
    <View style={styles.container}>
      <Input
        type="text"
        placeholder="Question"
        value={question}
        onChangeText={setQuestion}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Input
          containerStyle={{ width: 140 }}
          type="text"
          placeholder="Points"
          value={points}
          onChangeText={setPoints}
        />
        <Input
          containerStyle={{ width: 140 }}
          type="text"
          placeholder="Time in Secs"
          value={timer}
          onChangeText={setTimer}
        />
      </View>
      <Input
        type="text"
        placeholder="Write your answer here..."
        value={answer}
        onChangeText={setAnswer}
      />

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={{ width: 140 }}
          title="Submit"
          type="outline"
          onPress={submit}
          raised
        />
        <Button
          containerStyle={{ width: 140 }}
          title="Add Another"
          onPress={addAnother}
          raised
        />
      </View>
    </View>
  );
};

export default AddInputQuestion;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
