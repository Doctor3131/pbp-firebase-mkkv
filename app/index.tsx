import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import Button from '../components/Button';

export default function Index() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="type your name"
        onChangeText={newName => setName(newName)}
        defaultValue={name}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="type your password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
      />
      <Button
        label="submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    // alignItems: 'center',
  },
});
