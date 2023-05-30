import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helloooooooooo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
/* 브라우저가아니라 h1,span,b 등등 태그사용할수없음*/
//StyleSheet.create사용해야 자동맞춤이 발생함
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "black",
  },
});
