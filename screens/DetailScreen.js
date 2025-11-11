import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails</Text>
      <Text style={styles.paragraph}>Voici des informations supplémentaires sur cette section.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
  },
});
