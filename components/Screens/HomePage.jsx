import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import RoutineCard from "../Card/RoutineCard";

const data = [
  {
    id: 1,
    subject: "Math",
    room: "LB 203",
    teacher: "Teacher teaches",
    batch: 2018,
    group: "A",
    startingTime: "8am",
    endingTime: "9am",
  },
  {
    id: 2,
    subject: "Math",
    room: "LB 203",
    teacher: "Teacher teaches",
    batch: 2018,
    group: "A",
    startingTime: "9am",
    endingTime: "10am",
  },
  {
    id: 3,
    subject: "Math",
    room: "LB 203",
    teacher: "Teacher teaches",
    batch: 2018,
    group: "A",
    startingTime: "10am",
    endingTime: "11am",
  },
  {
    id: 4,
    subject: "Math",
    room: "LB 203",
    teacher: "Teacher teaches",
    batch: 2018,
    group: "A",
    startingTime: "11am",
    endingTime: "12pm",
  },
  {
    id: 5,
    subject: "Math",
    room: "LB 203",
    teacher: "Teacher teaches",
    batch: 2018,
    group: "A",
    startingTime: "12pm",
    endingTime: "1pm",
  },
  // Add more cards here
];

export default function HomePage({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.card}>
            <Text
              style={styles.cardTitle}
              onPress={() => navigation.navigate("Routine", { data })}
            >
              Routine
            </Text>
          </View>
          <View style={styles.card}>
            <Text
              style={styles.cardTitle}
              onPress={() => navigation.navigate("Attendance", { data })}
            >
              Attendance
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.nextRoutines}>The upcoming classes: </Text>
          <View style={styles.groupBatch}>
            <Text style={styles.groupBatch}>Batch: {data[0].batch}</Text>
            <Text style={styles.groupBatch}>Group: {data[0].group}</Text>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <RoutineCard data={item} />}
          keyExtractor={item => item.id}
        />
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
    fontWeight: "bold",
  },
  groupBatch: {
    flexDirection: "row",
    paddingStart: 15,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ccc",
    marginTop: 5,
    marginBottom: 5,
  },
});
