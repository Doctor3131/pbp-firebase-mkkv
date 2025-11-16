import { useSession } from '@/context';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // ============================================================================
  // Hooks
  // ============================================================================
  const { user } = useSession();

  // ============================================================================
  // Computed Values
  // ============================================================================

  /**
   * Gets the display name for the welcome message
   * Prioritizes user's name, falls back to email, then default greeting
   */
  const displayName =
    user?.displayName || user?.email?.split('@')[0] || 'Guest';

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <View style={styles.container}>
      {/* Profile Information Section */}
      <View style={styles.infoSection}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{displayName}</Text>

        <Text style={[styles.label, styles.spacingTop]}>Email:</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <Text style={[styles.label, styles.spacingTop]}>Last Seen:</Text>
        <Text style={styles.value}>{user?.metadata?.lastSignInTime}</Text>

        <Text style={[styles.label, styles.spacingTop]}>Created:</Text>
        <Text style={styles.value}>{user?.metadata?.creationTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    padding: 16,
  },
  infoSection: {
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E3A8A',
    marginTop: 4,
  },
  spacingTop: {
    marginTop: 16,
  },
});

export default ProfileScreen;
