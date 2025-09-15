import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/features/auth/AuthContext';
import { LoginForm } from '@/features/auth/components';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { initializing, user, resetPassword } = useAuth();

  React.useEffect(() => {
    if (user && !initializing) {
      router.replace('/');
    }
  }, [user, initializing, router]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome Back</ThemedText>
      <View style={{ height: 12 }} />
      <LoginForm
        onSwitchToSignup={() => router.push('/signup')}
        onForgotPassword={async (email) => {
          if (!email) return Alert.alert('Enter email above first');
          try { await resetPassword(email); Alert.alert('Password reset email sent'); } catch (e: any) {
            Alert.alert('Error', e?.message ?? 'Unable to send reset email');
          }
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
});
