import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
} from "react-native";
import { Input, Button, CheckBox, Card } from "react-native-elements";
import { db } from "../../firebase";

const AddMultipleQuestion = ({ quizId, navigation }) => {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(0);

  const clearFields = () => {
    setQuestion("");
    setOptionOne("");
    setOptionTwo("");
    setOptionThree("");
    setOptionFour("");
    setCheckedOne(false);
    setCheckedTwo(false);
    setCheckedThree(false);
    setCheckedFour(false);
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
        type: "Multiple",
        options: [
          { optionOne, correct: checkedOne },
          { optionTwo, correct: checkedTwo },
          { optionThree, correct: checkedThree },
          { optionFour, correct: checkedFour },
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
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
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
        <Card>
          <Input
            type="text"
            placeholder="Option 1"
            value={optionOne}
            onChangeText={setOptionOne}
          />
          <CheckBox
            title="Correct"
            checked={checkedOne}
            onPress={() => setCheckedOne(!checkedOne)}
          />
        </Card>
        <Card>
          <Input
            type="text"
            placeholder="Option 2"
            value={optionTwo}
            onChangeText={setOptionTwo}
          />
          <CheckBox
            title="Correct"
            checked={checkedTwo}
            onPress={() => setCheckedTwo(!checkedTwo)}
          />
        </Card>
        <Card>
          <Input
            type="text"
            placeholder="Option 3"
            value={optionThree}
            onChangeText={setOptionThree}
          />
          <CheckBox
            title="Correct"
            checked={checkedThree}
            onPress={() => setCheckedThree(!checkedThree)}
          />
        </Card>
        <Card>
          <Input
            type="text"
            placeholder="Option 4"
            value={optionFour}
            onChangeText={setOptionFour}
          />
          <CheckBox
            title="Correct"
            checked={checkedFour}
            onPress={() => setCheckedFour(!checkedFour)}
          />
        </Card>

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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddMultipleQuestion;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    marginBottom: 70,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },
});
