import React from 'react';
import { renderHook, act } from '@testing-library/react-native';
import { AuthProvider, useAuth } from './AuthContext';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
} from 'firebase/auth';

// Mock firebase.config first
jest.mock('@/firebase.config', () => ({
  auth: {
    // Mock any properties of auth if they are accessed directly
  },
}));

// Mock Firebase Auth module
jest.mock('firebase/auth', () => ({
  // Keep getAuth if it's used, otherwise it can be removed
  getAuth: jest.fn(),
  // The actual onAuthStateChanged function is what we need to mock
  onAuthStateChanged: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
}));

describe('AuthContext', () => {
  // Typecast mocks for easier use
  const mockedOnAuthStateChanged = onAuthStateChanged as jest.Mock;
  const mockedSignInWithEmailAndPassword = signInWithEmailAndPassword as jest.Mock;
  const mockedCreateUserWithEmailAndPassword = createUserWithEmailAndPassword as jest.Mock;
  const mockedSignOut = signOut as jest.Mock;
  const mockedSendPasswordResetEmail = sendPasswordResetEmail as jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('should initialize, set user to null when not logged in', () => {
    // Setup onAuthStateChanged to immediately call back with null
    mockedOnAuthStateChanged.mockImplementation((auth, callback) => {
      callback(null);
      return jest.fn(); // Return a mock unsubscribe function
    });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    expect(result.current.initializing).toBe(false);
    expect(result.current.user).toBeNull();
  });

  it('should initialize and set user when logged in', () => {
    const mockUser = { uid: 'test-uid', email: 'test@example.com' } as User;
    // Setup onAuthStateChanged to immediately call back with a mock user
    mockedOnAuthStateChanged.mockImplementation((auth, callback) => {
      callback(mockUser);
      return jest.fn();
    });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    expect(result.current.initializing).toBe(false);
    expect(result.current.user).toBe(mockUser);
  });

  it('should call signInWithEmailAndPassword on login', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });
    const email = 'test@example.com';
    const password = 'password123';

    await act(async () => {
      await result.current.login(email, password);
    });

    expect(mockedSignInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), email, password);
  });

  it('should call createUserWithEmailAndPassword on signup', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });
    const email = 'test@example.com';
    const password = 'password123';

    await act(async () => {
      await result.current.signup(email, password);
    });

    expect(mockedCreateUserWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), email, password);
  });

  it('should call signOut on logout', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(async () => {
      await result.current.logout();
    });

    expect(mockedSignOut).toHaveBeenCalled();
  });

  it('should call sendPasswordResetEmail on resetPassword', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });
    const email = 'test@example.com';

    await act(async () => {
      await result.current.resetPassword(email);
    });

    expect(mockedSendPasswordResetEmail).toHaveBeenCalledWith(expect.any(Object), email);
  });
});
