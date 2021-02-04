import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { db } from "../../firebase";

const AddSingleQuestion = ({ quizId, navigation }) => {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(0);

  const clearFields = () => {
    setQuestion("");
    setOptionOne("");
    setOptionTwo("");
    setOptionThree("");
    setOptionFour("");
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
        type: "Single",
        options: [
          { optionOne, correct: true },
          { optionTwo, correct: false },
          { optionThree, correct: false },
          { optionFour, correct: false },
        ],
      })
      .then(() => clearFields())
      .catch((error) => alert(error));
  };

  const addAnother = async () => {
    await createQuestion();
  };

  const submit = async () => {
    await createQuestion();
    navigation.navigate("Questions");
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
        placeholder="Option 1   (Right Answer)"
        value={optionOne}
        onChangeText={setOptionOne}
      />
      <Input
        type="text"
        placeholder="Option 2"
        value={optionTwo}
        onChangeText={setOptionTwo}
      />
      <Input
        type="text"
        placeholder="Option 3   (Optional)"
        value={optionThree}
        onChangeText={setOptionThree}
      />
      <Input
        type="text"
        placeholder="Option 4   (Optional)"
        value={optionFour}
        onChangeText={setOptionFour}
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

export default AddSingleQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
