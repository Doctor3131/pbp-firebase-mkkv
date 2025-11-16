import { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import Button from '../components/Button';
import { loginUser, registerUser } from '../data/userStore';

export default function Index() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    if (!name || !password) {
      alert('Please enter both name and password.');

      return;
    }

    if (isLogin) {
      const user = loginUser(name, password);

      if (user) {
        alert(`Welcome back, ${user.name}!`);
      } else {
        alert('Invalid name or password.');
      }
    } else {
      const user = registerUser(name, nim, password);

      if (user) {
        alert(`Welcome, ${user.name}! Your account has been created.`);
        setIsLogin(true);
      } else {
        alert('A user with this name already exists.');
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setPassword('');
    setNim('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>

        <TextInput
          style={styles.input}
          placeholder="Type your name"
          placeholderTextColor="#888"
          onChangeText={setName}
          value={name}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Type your nim"
          placeholderTextColor="#888"
          onChangeText={setNim}
          value={nim}
        />
        <TextInput
          style={styles.input}
          placeholder="Type your password"
          placeholderTextColor="#888"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Button
          label={isLogin ? 'Login' : 'Create Account'}
          onPress={handleSubmit}
        />

        <Button
          label={isLogin ? 'Need an account? Register' : 'Have an account? Login'}
          onPress={toggleForm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  authContainer: {
    width: 400,
    height: 500,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    width: 320,
    height: 50,
    backgroundColor: '#3e4042',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});
