import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche</Text>
      <Text style={styles.paragraph}>Explore les contenus disponibles à l'aide de la barre de recherche.</Text>
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
