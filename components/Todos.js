import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const Todos = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={props.todo.checked? styles.squareCompleted: styles.squarePending} onPress={props.onToggle}>
            {/* <View ></View> */}
        </TouchableOpacity>
        <Text style={[styles.itemText, props.todo.checked? styles.complete: null]}>{props.todo.text}</Text>
      </View>
      <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.circular}></View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  squarePending: {
    width: 24,
    height: 24,
    backgroundColor: '#ff5252',
    borderRadius: 5,
    marginRight: 15,
  },
  squareCompleted: {
    width: 24,
    height: 24,
    opacity: 0.3,
    backgroundColor: '#00e676',
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: "#283593",
    fontWeight: "bold",
  },
  complete: {
    textDecorationLine: "line-through",
    textDecorationColor: "#ff5252",
  },
  circular: {
    width: 25,
    height: 15,
    borderColor: '#b71c1c',
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default Todos;