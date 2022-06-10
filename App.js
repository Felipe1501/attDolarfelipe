import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  



  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HELLO HELLO!</Text>
      <View style={styles.texto}>
          <Text style={styles.texto}>COTAÇÃO MOEDAS:</Text>

          <TouchableOpacity
          style={styles.bloco}>
              <Text style={styles.txtBloco}>BUSCAR</Text>
          </TouchableOpacity>




      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
      fontSize: 25,

  },

  input: {
    width: 200,
    borderBottomWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: '#E6F5FF'
  },

  txtBloco: {
    marginTop: 10,
      backgroundColor: '#1FC9CC',
      borderWidth: 2,
      borderColor: '#E6F5FF',
      borderRadius: 10,
      width: 200,
      textAlign: 'center',
      height: 40, 
      padding: 5, 
      fontSize: 20,
    },
});
