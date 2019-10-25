import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function About() {
  return (
    <View >
      <Text style={styles.container}>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
