import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{
    firstName?: string | string[];
  }>();

  const name = Array.isArray(firstName) ? firstName[0] : firstName;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Confirmation" }} />

      <Text style={styles.title}>
        {name ? `Thank you, ${name}!` : "Confirmation"}
      </Text>

      <Text style={styles.message}>
        {name
          ? "Your sign-up form was submitted successfully."
          : "Please complete the sign-up form first."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111111",
    textAlign: "center",
    marginBottom: 12,
  },
  message: {
    fontSize: 17,
    color: "#555555",
    textAlign: "center",
  },
});
