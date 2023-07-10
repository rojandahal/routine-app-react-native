import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Chip, List } from "react-native-paper";

const TeacherAccordion = ({ teacherData }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    console.log(selectedTeacher);
  }, [selectedTeacher]);

  const handleTeacherSelection = teacherName => {
    setSelectedTeacher(teacherName);
  };

  return (
    <List.Section>
      <List.Accordion
        left={props => <List.Icon {...props} />}
        title='Select Teacher'
      >
        <FlatList
          data={teacherData}
          renderItem={({ item }) => (
            <Chip
              mode='flat'
							showSelectedOverlay={true}
              style={{ margin: 4 }}
              onPress={() =>
                selectedTeacher
                  ? handleTeacherSelection(null)
                  : handleTeacherSelection(item.name)
              }
              selected={selectedTeacher === item.name}
            >
              {item.name}
            </Chip>
          )}
          keyExtractor={item => item.id}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default TeacherAccordion;
