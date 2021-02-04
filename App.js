import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "./firebase";

import LoadingIndicator from "./screens/components/LoadingIndicator";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddQuizScreen from "./screens/AddQuizScreen";
import AddQuestionScreen from "./screens/AddQuestionScreen";
import QuestionsScreen from "./screens/QuestionsScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "#fff" },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        {isSignedIn === null ? (
          <Stack.Screen name="Loading..." component={LoadingIndicator} />
        ) : isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddQuiz" component={AddQuizScreen} />
            <Stack.Screen name="Questions" component={QuestionsScreen} />
            <Stack.Screen name="AddQuestion" component={AddQuestionScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
