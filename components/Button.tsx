import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
}

export default function Button({ label, onPress }: Props) {
  return (
    <View >
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginVertical: 10,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
  },
  secondaryButtonLabel: {
    color: '#aaa',
    fontSize: 16,
  },
});
