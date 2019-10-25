import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewDetails() {
  return (
    <View >
      <Text style={styles.container}>ReviewDetails Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});