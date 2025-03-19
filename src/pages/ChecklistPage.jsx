import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChecklistPage = ({ route }) => {
  const { projectCode, equipmentType } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checklist Page</Text>
      <Text style={styles.subtext}>Project Code: {projectCode}</Text>
      <Text style={styles.subtext}>Equipment: {equipmentType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040F2E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtext: {
    color: "white",
    fontSize: 18,
  },
});

export default ChecklistPage;
