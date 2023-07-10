import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import RoutineCard from "../Card/RoutineCard";
import { useRoute } from "@react-navigation/native";
import TeacherAccordion from "../TeacherAccordion/TeacherAccordion";
import TeacherFilterChip from "../TeacherAccordion/TeacherFilterChip";

const Routine = () => {
  const route = useRoute();
  const data = route.params.data;
  const [filterVisible, setFilterVisible] = useState(false);

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

  const filterData = [
    {
      id: 1,
      name: "Subject",
    },
    {
      id: 2,
      name: "Batch",
    },
  ];

  const toggleFilterVisible = () => {
    setFilterVisible(!filterVisible);
  };

  const closeModal = () => {
    setFilterVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleFilterVisible}
        style={styles.filterButton}
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>Filter</Text>
      </TouchableOpacity>

      <Modal
        visible={filterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={closeModal}
        >
          <View style={styles.modalContent}>
            <View style={styles.filterContainer}>
              <View style={styles.filter}>
                <Text style={{ fontSize: 18 }}>Filter Routine</Text>
                <View style={{ flexDirection: "row" }}>
                  <TeacherFilterChip filterData={filterData} />
                </View>
              </View>
              <View style={{ marginBottom: 10, width: "50%" }}>
                <TeacherAccordion
                  teacherData={teacherData}
                  style={styles.accordion}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <FlatList
        data={data}
        renderItem={({ item }) => <RoutineCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderColor: "#ccc",
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "20%",
    borderRadius: 8,
    padding: 10,
    marginEnd: 10,
    marginStart: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  filterContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "100%",
  },
  filter: {
    marginBottom: 10,
  },
});

export default Routine;
