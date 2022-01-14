import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Todos from './components/Todos'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.wrapper}>
        <Text style = {styles.title}>Today's tasks</Text>
      </View>

      <View style = {styles.listItems}>
        <Todos />
        <Todos />
        <Todos />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listItems: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
});
