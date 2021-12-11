import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import axios from 'axios';
import CardItem from './components/CardItem';


export default function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (<>
    {!users ? <Text>Loading...</Text> :
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} >Users from API</Text>
          <Text >Data is provided by  <Text style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://jsonplaceholder.typicode.com/')}>
            https://jsonplaceholder.typicode.com/
          </Text>
          </Text>
        </View>

        {users.map((user) => (
          <CardItem key={user.id} user={user} />
        ))}
        <StatusBar style="auto" />
      </View>
    }
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24
  },
  header: {
    textAlign: 'center',
    margin: 16
  }
});
