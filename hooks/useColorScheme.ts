import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Custom hook to get the current color scheme
 * Provides a type-safe wrapper around React Native's useColorScheme
 * @returns 'light' | 'dark' | null
 */
export function useColorScheme() {
  return useRNColorScheme();
}
