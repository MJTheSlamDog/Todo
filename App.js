import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodo] = useState([
    {text: "buy coffee", key: 1},
    {text: "create an app", key: 2},
    {text: "play cyberpunk 2077", key:3},
  ])

  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key);
    });

    
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodo((prevTodos) =>{
        return [
            {text: text, key: Math.random().toString() },
            ...prevTodos
        ];
      });
    } else {
      Alert.alert("OOPS!", "Please enter more characters...", [
        {text: "understood", onPress: () => console.log("alert closed")}]);
    }
    
}

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            />
          </View>
        </View>
        <StatusBar style="auto" /> 
      </View>
    </TouchableWithoutFeedback>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',        
  },
  content: {
    flex: 1,
    padding: 40,
    // backgroundColor: "purple"
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: "yellow",   
  },
});
