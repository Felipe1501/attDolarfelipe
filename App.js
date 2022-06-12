import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Moeda from './Componentes/Moeda';
import APIMoedas from './Componentes/Api';

export default function App() {

    const [moeda, setMoeda] = useState("");
    //const [libra, setLibra] = useState("");

    async function precoDolar(){
      const resposta = await APIMoedas.get('json/last/USD-BRL');
      setMoeda(resposta.data.USDBRL);
    }

    async function precoLibra(){
      const resposta = await APIMoedas.get('json/last/BRL-GBP');
      setMoeda(resposta.data.BRLGBP);
    }

    async function precoEuro(){
      const resposta = await APIMoedas.get('json/last/EUR-USD');
      setMoeda(resposta.data.EURUSD);
    }

    function limpar(){
      setMoeda("");
    }


  return (
    <View style={styles.container}>
            <Image
        style={styles.logo}
        source={{
          uri: 'https://imagens.ebc.com.br/xj-ofexRdWVoCJyluqfmOtAj1VA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/dolar_moeda_0803221212.jpg?itok=aJCrKvtz',
        }}
      />
      <Text style={styles.texto}>CIAO CIAO!</Text>
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
          onPress={precoEuro}>
              <Text style={styles.txtBloco}>EURO PARA DÓLAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={limpar}>
              <Text style={styles.txtBloco}>LIMPAR</Text>
          </TouchableOpacity>
          <Moeda data={moeda}/>
  

    

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
