import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RoutineCard({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card 1</Text>
        <Text style={styles.cardText}>This is the content of Card 1.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card 2</Text>
        <Text style={styles.cardText}>This is the content of Card 2.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginStart: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    marginBottom: 16,
    width: 300,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
  },
});
