//CS 262 Young In Kim (yk47)

import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, FlatList
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


export default function App() {
  //name = actual state
  //setName = function
  const [name, setName] = useState('Name'); //give name value
  const [newAge, setAge] = useState(0)
  const [birthdays, setBirthdays] = useState([]);
  const clickHandler = () => {
    setAge(newAge + 1);
    setBirthdays(
      birthdays.concat({ key: newAge.toString() })
    );

  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Birthday Counter</Text>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />
      <Text>{name} is {newAge} years old</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title='Birthday' onPress={clickHandler} />
      </View>
      <FlatList
        data={birthdays}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.key}</Text>
        )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  header: {
    height: 80,
    width: 500,
    paddingTop: 10,
    marginBottom: 50,
    backgroundColor: 'pink',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center'

  }

});
