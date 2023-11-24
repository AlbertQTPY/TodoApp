import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        < Button title="Add Task" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            <View style={styles.todoItem}>
              <Text style={[styles.todoText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
                {item.text}
              </Text>
              <Button title="Remove" onPress={() => removeTodo(item.id)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Center vertically
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  button: {
    backgroundColor: 'black', // Change the button color to black
    color: 'white',
    padding: 10,
    borderRadius: 5,

  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  todoText: {
    flex: 1,
  },
  button: {
    backgroundColor: 'black', // Change the button color to black
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default TodoApp;
