import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web';
import React, {useState} from 'react';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Todos from './components/Todos'

export default function App() {
  const [task, setstate] = useState();

  const addTodo = () => {
    console.log(task);
  }
  
  return (
    <View style={styles.container}>
      <View style = {styles.wrapper}>
        <Text style = {styles.title}>Today's tasks</Text>
      </View>

      <View style = {styles.listItems}>
        <Todos />
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style = {styles.input} placeholder = "Write a task..." value = {task} onChangeText = {(text) => setTask(text)} />
        <TouchableOpacity onClick = {this.addTodo}>
          <View style = {styles.buttonWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: '100%',
    justifyContent: "space-around",
    alignItems: "center"
  },
  input:{
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 2,
  },
  buttonWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 2,
    
  },
  addText: {
    
  },
});
