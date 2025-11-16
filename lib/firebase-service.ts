import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth';
import { auth } from './firebase-config';

/**
 * Registers a new user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @param name - Optional display name for the user
 * @returns UserCredential or undefined if registration fails
 */
export const register = async (
  email: string,
  password: string,
  name?: string,
): Promise<UserCredential | undefined> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Update display name if provided
    if (name && userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name,
      });
    }

    console.log('User registered successfully:', userCredential.user.email);

    return userCredential;
  } catch (error: any) {
    console.error('Registration error:', error.message);
    throw error;
  }
};

/**
 * Logs in an existing user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @returns UserCredential or undefined if login fails
 */
export const login = async (
  email: string,
  password: string,
): Promise<UserCredential | undefined> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log('User logged in successfully:', userCredential.user.email);

    return userCredential;
  } catch (error: any) {
    console.error('Login error:', error.message);
    throw error;
  }
};

/**
 * Logs out the current user
 */
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('User logged out successfully');
  } catch (error: any) {
    console.error('Logout error:', error.message);
    throw error;
  }
};

/**
 * Gets the current authenticated user
 * @returns Current user or null if not authenticated
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};
