import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from './AuthContext';
import { isValidEmail, validatePasswordStrength } from './validation';

export function LoadingSpinner() {
  return (
    <View style={styles.center}> 
      <ActivityIndicator size="large" />
    </View>
  );
}

type LoginFormProps = { onSwitchToSignup?: () => void; onForgotPassword?: (email: string) => void };
export function LoginForm({ onSwitchToSignup, onForgotPassword }: LoginFormProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!isValidEmail(email)) return Alert.alert('Invalid email');
    if (!password) return Alert.alert('Enter your password');
    setLoading(true);
    try {
      await login(email, password);
    } catch (e: any) {
      Alert.alert('Login failed', e?.message ?? 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <Pressable onPress={handleLogin} style={styles.button} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
      </Pressable>
      <View style={styles.row}>
        <Pressable onPress={() => onForgotPassword?.(email)}>
          <Text style={styles.link}>Forgot Password?</Text>
        </Pressable>
        <Pressable onPress={onSwitchToSignup}>
          <Text style={styles.link}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

type SignUpFormProps = { onSwitchToLogin?: () => void };
export function SignUpForm({ onSwitchToLogin }: SignUpFormProps) {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!isValidEmail(email)) return Alert.alert('Invalid email');
    const pass = validatePasswordStrength(password);
    if (!pass.ok) return Alert.alert('Weak password', pass.reason);
    if (password !== confirm) return Alert.alert('Passwords do not match');
    setLoading(true);
    try {
      await signup(email, password);
    } catch (e: any) {
      Alert.alert('Signup failed', e?.message ?? 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry value={confirm} onChangeText={setConfirm} style={styles.input} />
      <Pressable onPress={handleSignup} style={styles.button} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Creating account...' : 'Create account'}</Text>
      </Pressable>
      <Pressable onPress={onSwitchToLogin}>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  container: { gap: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
  button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  link: { color: '#007AFF', marginTop: 8 },
});


