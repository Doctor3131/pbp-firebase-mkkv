import { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext'; // Adjust path
import { View, ActivityIndicator } from 'react-native';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    if (
      !session &&
      !inAuthGroup
    ) {
      router.replace('/(auth)/login');
    } else if (
      session &&
      inAuthGroup
    ) {
      router.replace('/(app)');
    }

    SplashScreen.hideAsync();

  }, [session, isLoading, segments, router]);

  if (isLoading) {
    return <View style={{ flex: 1, backgroundColor: '#25292e' }} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
