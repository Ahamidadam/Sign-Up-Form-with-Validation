import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function SignUpScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Create an account</Text>

        <Text style={styles.description}>Complete all five fields below.</Text>

        <Text style={styles.label}>First name</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="First name"
          placeholder="Enter your first name"
          placeholderTextColor="#666666"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Text style={styles.label}>Last name</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="Last name"
          placeholder="Enter your last name"
          placeholderTextColor="#666666"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="Email"
          placeholder="Enter your email"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="Password"
          placeholder="Enter your password"
          placeholderTextColor="#666666"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="Confirm password"
          placeholder="Re-enter your password"
          placeholderTextColor="#666666"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Submission will be connected in a later commit. */}
        <Pressable style={styles.button} accessibilityRole="button" disabled>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 24,
    paddingBottom: 48,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888888",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111111",
    backgroundColor: "#ffffff",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#2457c5",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
