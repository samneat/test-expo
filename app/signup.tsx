import React from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SignUpForm } from '@/features/auth/components';
import { useAuth } from '@/features/auth/AuthContext';

export default function SignUpScreen() {
  const router = useRouter();
  const { initializing, user } = useAuth();

  if (user && !initializing) {
    router.replace('/');
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Create Account</ThemedText>
      <SignUpForm onSwitchToLogin={() => router.replace('/login')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
});


