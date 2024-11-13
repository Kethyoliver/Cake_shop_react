import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import estilos from './estilo';
import Api from '../../services/api';
import Ionicons  from 'react-native-vector-icons/Ionicons';

export default function Sugestoes({ info }) {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [uf, setUf] = useState("");

    async function buscarCep() {
        if (cep == "") {
            Alert.alert("Cep Inválido!");
            setCep("");
            return;
        }
        try {
            const response = await Api.get(`/${cep}/json/`);
            setLogradouro(response.data.logradouro);
            setBairro(response.data.bairro);
            setLocalidade(response.data.localidade);
            setUf(response.data.uf);
        } catch (error) {
            console.log("ERRO" + error);
        }
    }

    function limparCampos() {
        setCep("");
        setLogradouro("");
        setBairro("");
        setLocalidade("");
        setUf("");
    }

    return (
        <ScrollView style={estilos.container}> 
            <Image source={info.logo} style={estilos.logo} resizeMode='contain' />
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder='CEP'
                    keyboardType='numeric'
                    value={cep}
                    style={estilos.cep} 
                    onChangeText={(texto) => setCep(texto)}
                />
                <TextInput
                    placeholder='Logradouro'
                    style={estilos.input} 
                    value={logradouro}
                    onChangeText={(texto) => setLogradouro(texto)}
                />
                <TextInput
                    placeholder='Bairro'
                    style={estilos.input}
                    value={bairro} 
                    onChangeText={(texto) => setBairro(texto)}
                />
                <TextInput
                    placeholder='Cidade'
                    style={estilos.input}
                    value={localidade} 
                    onChangeText={(texto) => setLocalidade(texto)}
                />
                <TextInput
                    placeholder='Estado'
                    style={estilos.input}
                    value={uf}
                    onChangeText={(texto) => setUf(texto)} 
                />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0 }}>
                <TouchableOpacity style={estilos.botao} onPress={buscarCep}>
                    <Text style={estilos.textoBotao}>Buscar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={limparCampos} style={{ marginLeft: 20, marginTop: 10 }}>
                    <Ionicons name='trash' size={30} color="red"/>
                </TouchableOpacity>
                </View>  
            </View>
        </ScrollView>
    );
}
