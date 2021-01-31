import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRegister } from "./hooks/useRegister";

const RegisterScreen = ({ navigation }) => {
  const [
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    imageUrl,
    setImageUrl,
    register,
  ] = useRegister(navigation);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3>
        Quiz
        <Text h3 style={{ color: "rgb(32, 137, 220)" }}>
          Survey
        </Text>{" "}
        Development
      </Text>

      <KeyboardAvoidingView behavior="height" style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.inputStyle}
            leftIcon={<Icon name="address-card" size={15} color="grey" />}
            placeholder="Full Name"
            type="text"
            value={name}
            onChangeText={setName}
            autoFocus
          />
          <Input
            style={styles.inputStyle}
            leftIcon={<Icon name="envelope" size={15} color="grey" />}
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.inputStyle}
            leftIcon={<Icon name="lock" size={20} color="grey" />}
            placeholder="Password"
            type="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Input
            style={styles.inputStyle}
            leftIcon={<Icon name="camera" size={15} color="grey" />}
            placeholder="Profile Picture URL (optional)"
            type="text"
            value={imageUrl}
            onChangeText={setImageUrl}
            onSubmitEditing={register}
          />
        </View>

        <Button
          containerStyle={styles.button}
          title="Register"
          onPress={register}
          raised
        />
      </KeyboardAvoidingView>

      <View style={{ height: 80 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
