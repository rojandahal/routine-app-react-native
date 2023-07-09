import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import RoutineCard from "../Card/RoutineCard";

const data = [
  { id: 1, title: "Card 1", content: "This is the content of Card 1." },
  { id: 2, title: "Card 2", content: "This is the content of Card 2." },
  { id: 3, title: "Card 3", content: "This is the content of Card 3." },
  // Add more cards here
];

export default function HomePage() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Routine</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Attendance</Text>
          </View>
        </View>
        <View>
          <Text style={styles.nextRoutines}>The upcoming routines: </Text>
        </View>
        <ScrollView>
          <RoutineCard />
          <RoutineCard />
          <RoutineCard />
          <RoutineCard />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    padding: 16,
    margin: 16,
    width: 150,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  nextRoutines: {
    marginTop: 20,
    marginStart: 20,
    fontSize: 16,
  },
});
