import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function CardItem(props) {

  const { user } = props;

  return (
    <View style={styles.container}>
      <Text><Text style={styles.textBold}>#</Text>{user.id}</Text>
      <Text><Text style={styles.textBold}>Nombre: </Text>{user.name}</Text>
      <Text><Text style={styles.textBold}>Email: </Text>{user.email}</Text>
      <Text><Text style={styles.textBold}>Address: </Text>{user.address.street}, {user.address.suite}, {user.address.city}</Text>
      <Text><Text style={styles.textBold}>Telefono: </Text>{user.phone} </Text>
      <Text><Text style={styles.textBold}>Empresa: </Text>{user.company.name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90vw',
    maxHeight: '40vh',
    minHeight: '15vh',
    borderRadius: 8,
    padding: 8,

    margin: 5
  },
  // col: {
  //   width: '50%'
  // },
  textBold: {
    fontWeight: 'bold'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

