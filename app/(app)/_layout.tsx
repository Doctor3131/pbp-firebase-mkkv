import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

export default function AppLayout() {
  const { session } = useAuth();

  // You can use session data here if needed, e.g., for headers
  // For now, just a standard tab layout

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#333',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: '#FFF' },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: '#FFF' },
        }}
      />
    </Tabs>
  );
}
