import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLogin } from "./hooks/useLogin";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail, password, setPassword, login] = useLogin(navigation);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />

      <Text h3>
        Quiz
        <Text h3 style={{ color: "rgb(32, 137, 220)" }}>
          Survey
        </Text>{" "}
        Development
      </Text>

      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.inputStyle}
            leftIcon={<Icon name="envelope" size={15} color="grey" />}
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={setEmail}
            autoFocus
          />
          <Input
            style={styles.inputStyle}
            leftIcon={<Icon name="lock" size={20} color="grey" />}
            placeholder="Password"
            type="password"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={login}
            secureTextEntry
          />
        </View>

        <Button
          containerStyle={styles.button}
          title="Login"
          onPress={login}
          raised
        />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Register"
          onPress={() => navigation.navigate("Register")}
          raised
        />
      </View>

      <View style={{ height: 80 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
  },
  inputStyle: {
    paddingLeft: 8,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
