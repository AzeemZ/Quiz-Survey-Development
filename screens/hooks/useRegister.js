import { useState, useLayoutEffect } from "react";
import { auth } from "../../firebase";

const useRegister = (navigation) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: "true",
      headerBackTitle: "Login",
      headerPressColorAndroid: "transparent",
      // headerTruncatedBackTitle: "Login",
      headerBackTitleStyle: { color: "#fff" },
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
        });
      })
      .catch((error) => alert(error.message));
  };

  return [
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    imageUrl,
    setImageUrl,
    register,
  ];
};

export { useRegister };
