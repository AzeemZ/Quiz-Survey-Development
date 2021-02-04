import { useState, useEffect } from "react";
import { db } from "../../firebase";

const useQuestions = (route) => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const unsubscribe = db
      .collection(`/quizzes/${route.params.id}/questions`)
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.empty) {
          setQuestions("");
        } else {
          setQuestions(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
      });
    return unsubscribe;
  }, []);

  return [questions];
};

export { useQuestions };
