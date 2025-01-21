import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const HomeScreen = () => {
  const showAlert = () => {
    Alert.alert('Alerta', 'Funcional');
  };

  return (
    <View style={styles.container}>
      <Button title="OK" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
