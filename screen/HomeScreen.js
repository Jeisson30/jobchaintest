import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const clearInput = () => {
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContainer, isFocused && styles.focusedContainer]}>
        {(isFocused || email.length > 0) && (
          <Text style={styles.floatingLabel}>Correo electrónico</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder={
            !isFocused && email.length === 0 ? 'Correo electrónico' : ''
          }
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {email.length > 0 && (
          <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
            <Image
              source={require('./assets/Cerrar (v2).png')}
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  inputContainer: {
    width: '360px',
    height: '60px',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141534',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  focusedContainer: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  floatingLabel: {
    position: 'absolute',
    top: -1,
    left: 10,
    backgroundColor: '#141534',
    color: '#7876B1',
    fontSize: 10,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 0,
    fontStyle: 'none',
  },
  clearButton: {
    marginLeft: 8,
  },
  clearIcon: {
    width: 20,
    height: 20,
  },
});

export default EmailInput;
