import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/features/auth/AuthContext';
import { SignUpForm } from '@/features/auth/components';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const { initializing, user } = useAuth();

  React.useEffect(() => {
    if (user && !initializing) {
      router.replace('/');
    }
  }, [user, initializing, router]);

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
