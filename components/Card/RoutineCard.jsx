import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RoutineCard({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headingText}>
          <Image
            style={styles.imageThumbnail}
            source={require("../../assets/png/profile.png")}
          />
          <View style={{ marginStart: 10 }}>
            <Text style={styles.cardTitle}>{data.subject}</Text>
            <Text style={styles.cardText}>{data.teacher}</Text>
          </View>
        </View>

        <View style={styles.bottomText}>
          <Text style={styles.cardText}>{data.startingTime}</Text>
          <Text style={styles.cardText}> - </Text>
          <Text style={styles.cardText}>{data.endingTime}</Text>
        </View>

        <Text style={styles.cardRoom}>{data.room}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 20,
  },
  headingText: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageThumbnail: {
    width: 50,
    height: 50,
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
  cardRoom: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
  bottomText: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
