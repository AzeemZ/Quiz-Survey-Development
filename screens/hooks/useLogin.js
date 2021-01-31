import { useState, useEffect } from "react";
import { auth } from "../../firebase";

const useLogin = (navigation) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    auth.signInWithEmailAndPassword(email, password);
  };

  return [email, setEmail, password, setPassword, login];
};

export { useLogin };
