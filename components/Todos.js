import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react'

// import { TouchableOpacity } from 'react-native-web';

const Todos = (props) => {
    
    return (
        <View style = {styles.todoItem}>
            
            <View style={styles.todoItemLeft}>
                <View style = {styles.square}></View>
                <Text style={styles.text}>this.props.text</Text>
            </View>        
            <View style={styles.todoItemRight}>
                <TouchableOpacity style = {styles.circular}></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    todoItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    todoItemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap"
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    text: {
        maxWidth: "80%"    
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 50 
    }
    
});

export default Todos;