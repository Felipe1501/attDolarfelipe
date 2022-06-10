import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Dolar from './Componentes/Dolar';
import APIDolar from './Componentes/Api';

export default function App() {

    const [dolar, setDolar] = useState("");

    async function precoDolar(){
      const resposta = await APIDolar.get('json/last/USD-BRL');
      setDolar(resposta.data);
    }


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HELLO HELLO!</Text>
      <View style={styles.texto}>
          <Text style={styles.texto}>COTAÇÃO MOEDAS:</Text>

          <TouchableOpacity
          style={styles.bloco}
          onPress={precoDolar}>
              <Text style={styles.txtBloco}>DÓLAR PARA REAL</Text>
          </TouchableOpacity>
          <Dolar data={dolar}/>



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
