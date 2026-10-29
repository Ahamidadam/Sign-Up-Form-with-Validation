import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { signUpSchema, type SignUpValues } from "../validation/signUpSchema";

const fields: {
  name: keyof SignUpValues;
  label: string;
  placeholder: string;
}[] = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "Enter your first name",
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Enter your last name",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    placeholder: "Re-enter your password",
  },
];

export default function SignUpScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignUpValues) {
    // Log only names and email, never passwords.
    console.log({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });

    // Navigate only after the form passes validation.
    router.push({
      pathname: "/confirmation",
      params: {
        firstName: data.firstName,
      },
    });
  }

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

        {fields.map(({ name, label, placeholder }) => {
          const isPassword = name === "password" || name === "confirmPassword";

          const isEmail = name === "email";

          return (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <View style={styles.field}>
                  <Text style={styles.label}>{label}</Text>

                  <TextInput
                    ref={ref}
                    style={[
                      styles.input,
                      error ? styles.invalidInput : undefined,
                    ]}
                    accessibilityLabel={label}
                    placeholder={placeholder}
                    placeholderTextColor="#666666"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry={isPassword}
                    keyboardType={isEmail ? "email-address" : "default"}
                    autoCapitalize={isEmail || isPassword ? "none" : "words"}
                    autoCorrect={false}
                  />

                  {error && (
                    <Text style={styles.error} accessibilityRole="alert">
                      {error.message}
                    </Text>
                  )}
                </View>
              )}
            />
          );
        })}

        <Pressable
          style={styles.button}
          accessibilityRole="button"
          disabled={isSubmitting}
          onPress={() => {
            void handleSubmit(onSubmit)();
          }}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Text>
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
  field: {
    marginBottom: 18,
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
  },
  invalidInput: {
    borderColor: "#b42318",
  },
  error: {
    color: "#b42318",
    fontSize: 14,
    marginTop: 5,
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
