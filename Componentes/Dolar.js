import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Dolar(props) {
    return(
        <>
        <Text  style={styles.texto}>COMPRA: {props.data.bid} </Text>
        <Text  style={styles.texto}>VENDA: {props.data.ask}</Text>
        <Text style={styles.texto}>VARIAÇÃO: {props.data.varBid}</Text>
        <Text style={styles.texto}>MÁXIMO:  {props.data.high}</Text>
        <Text style={styles.texto}>MÍNIMO:  {props.data.low}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 15,
        marginTop: 10,
    },
});