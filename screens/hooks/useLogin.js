import { useState, useEffect } from "react";
import { auth } from "../../firebase";

const useLogin = (navigation) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(null);

  navigation.setOptions({ headerShown: true });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsSignedIn(true);
        navigation.replace("Home");
      } else {
        setIsSignedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    auth.signInWithEmailAndPassword(email, password);
  };

  return [email, setEmail, password, setPassword, isSignedIn, login];
};

export { useLogin };
