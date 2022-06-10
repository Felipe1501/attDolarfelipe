import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Dolar from './Componentes/Dolar';
import APIDolar from './Componentes/Api';
import Libra from './Componentes/Dolar';

export default function App() {

    const [dolar, setDolar] = useState("");
    //const [libra, setLibra] = useState("");

    async function precoDolar(){
      const resposta = await APIDolar.get('json/last/USD-BRL');
      setDolar(resposta.data.USDBRL);
    }

    async function precoLibra(){
      const resposta = await APIDolar.get('json/last/BRL-GBP');
      setDolar(resposta.data.BRLGBP);
    }

    function limpar(){
      setDolar("");
    }


  return (
    <View style={styles.container}>
            <Image
        style={styles.logo}
        source={{
          uri: 'https://imagens.ebc.com.br/xj-ofexRdWVoCJyluqfmOtAj1VA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/dolar_moeda_0803221212.jpg?itok=aJCrKvtz',
        }}
      />
      <Text style={styles.texto}>HELLO HELLO!</Text>
      <View style={styles.texto}>
          <Text style={styles.texto}>COTAÇÃO MOEDAS:</Text>

          <TouchableOpacity
          style={styles.bloco}
          onPress={precoDolar}>
              <Text style={styles.txtBloco}>DÓLAR PARA REAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={precoLibra}>
              <Text style={styles.txtBloco}>REAL PARA LIBRA</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={limpar}>
              <Text style={styles.txtBloco}>LIMPAR</Text>
          </TouchableOpacity>
          <Dolar data={dolar}/>
  

    

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6D9C0',
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
      backgroundColor: '#F2D2BD',
      borderWidth: 2,
      borderColor: '#E6F5FF',
      borderRadius: 10,
      width: 200,
      textAlign: 'center',
      height: 40, 
      padding: 5, 
      fontSize: 20,
    },
  logo:{
    width: 120,
    height: 90,
    margin: 5,
    borderRadius: 5
  }
});
