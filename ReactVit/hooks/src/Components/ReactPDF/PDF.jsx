import React from "react";
import { Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: { padding: 20 },
  section: { marginBottom: 10, padding: 10, borderBottom: "1 solid black" },
  title: { fontSize: 16, fontWeight: "bold" },
  text: { fontSize: 12 },
});

const PDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {data.map((restaurant, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{restaurant?.info?.name}</Text>
          <Text style={styles.text}>Rating: {restaurant?.info?.rating?.rating_text}</Text>
          <Text style={styles.text}>Restaurant ID: {restaurant?.info?.resId}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default PDF;