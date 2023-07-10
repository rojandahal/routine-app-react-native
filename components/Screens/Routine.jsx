import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import RoutineCard from "../Card/RoutineCard";
import { useRoute } from "@react-navigation/native";
import { Avatar, Chip, List } from "react-native-paper";
import TeacherAccordion from "../TeacherAccordion/TeacherAccordion";

const Routine = () => {
  const route = useRoute();
  const data = route.params.data;
  const [selectedSubject, setSelectedSubject] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const teacherData = [
    {
      id: 1,
      name: "Teacher 1",
    },
    {
      id: 2,
      name: "Teacher 2",
    },
  ];

  const _handlePress = () => {
    setExpanded(!expanded);
  };

  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Filter Routine</Text>
        <View style={{ flexDirection: "row" }}>
          <Chip
            mode='outlined'
            style={{ margin: 4 }}
            onPress={() =>
              selectedSubject
                ? setSelectedSubject(false)
                : setSelectedSubject(true)
            }
            selected={selectedSubject}
          >
            Subject
          </Chip>
          <Chip
            mode='outlined'
            style={{ margin: 4 }}
            onPress={() =>
              selectedBatch ? setSelectedBatch(false) : setSelectedBatch(true)
            }
            selected={selectedBatch}
          >
            Batch
          </Chip>
        </View>
      </View>
      <TeacherAccordion teacherData={teacherData} />
      <FlatList
        data={data}
        renderItem={({ item }) => <RoutineCard data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginStart: 20,
  },
  filter: {
    marginBottom: 20,
  },
});
export default Routine;
