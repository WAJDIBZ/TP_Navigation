import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function CustomHeader({ title }) {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#f2f2f7' }]}> 
      <Text style={[styles.title, { color: isDark ? '#f5f5f5' : '#111' }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
