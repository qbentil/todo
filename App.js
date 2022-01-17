import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

import Todos from './components/Todos';

let id = 0;

export default class App extends React.Component{
  constructor()
  {
    super();
    this.state = {
      text: "",
      todos: [],
    };
  }
   // add TODO
   addTodo()
   {
     Keyboard.dismiss();
     id++;
     if(this.state.text !== "")
     {
       this.setState({
         todos: [
           ...this.state.todos, { id: id++, text: this.state.text, checked: false }
         ]
       });

       // Empty the input
       this.setState({
         text: ""
       })
     }
   }

   // remove TODO
   removeTodo(id){
     this.setState({
       todos: this.state.todos.filter(todo => todo.id !== id)
     });
   }
   // Handle checked todo
   toggleTodoState(id)
   {
     this.setState({
       todos: this.state.todos.map(todo => {
         if (todo.id !== id) return todo;
         return {
           id: todo.id,
           text: todo.text,
           checked: !todo.checked,
         };
       })
     })
   }

  render(){
    return (
      <View style={styles.container}>
        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
  
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style = {styles.HeaderContainer}>
            <View style={styles.counters}>
               <Text style = {{fontSize: 15}}>Total Tasks:</Text>
              <Text style = {styles.count}>{this.state.todos.length}</Text>
            </View>
            <View style={styles.counters}>
               <Text style = {{fontSize: 15}}>Pending Tasks:</Text>
              <Text style = {styles.count}>{this.state.todos.filter(todo => !todo.checked).length}</Text>
            </View>
          </View>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {this.state.todos.map( todo => (
               <Todos
                todo = {todo}
                onDelete = {() => this.removeTodo(todo.id)} 
                onToggle = {() => this.toggleTodoState(todo.id)}
                key = {todo.id} 
               />
            ))}
          </View>
        </View>
          
        </ScrollView>
  
        {/* Write a task */}
        {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} 
              placeholder="Enter today's task"
              value = {this.state.text}
              onChangeText={(text) => this.setState({text})} 
          />
          <TouchableOpacity onPress={() => this.addTodo()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#1a237e',
    borderWidth: 1,
    width: 300,
    height: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1a237e',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#1a237e",
  },
  HeaderContainer: {
    flexDirection: 'row', 
    justifyContent: "space-around",
    paddingVertical: 15,
    paddingHorizontal:10,
    marginVertical: 20,
    borderRadius: 50,
    backgroundColor: "#fff",
    height: 60,
  },
  counters: {
    flexDirection: "row",
    alignItems: "center",
  },
  count: {
    fontWeight: "bold",
    marginHorizontal: 5,
    color: "#1a237e",
    fontSize: 15
  },
});