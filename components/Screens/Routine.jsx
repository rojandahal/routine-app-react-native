import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import RoutineCard from "../Card/RoutineCard";
import { useRoute } from "@react-navigation/native";

const Routine = () => {
  const route = useRoute();
  const data = route.params.data;

  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Filter Routine</Text>
      </View>
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
