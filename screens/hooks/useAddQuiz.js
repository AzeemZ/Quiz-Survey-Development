import { useState } from "react";
import { auth, db } from "../../firebase";

const useAddQuiz = (navigation) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createQuiz = async () => {
    await db
      .collection("quizzes")
      .add({ title, description, uid: auth.currentUser.uid })
      .then((docRef) => {
        navigation.navigate("AddQuestion", { quizId: docRef.id });
        setTitle("");
        setDescription("");
      })
      .catch((error) => alert(error));
  };

  return [title, setTitle, description, setDescription, createQuiz];
};

export { useAddQuiz };
