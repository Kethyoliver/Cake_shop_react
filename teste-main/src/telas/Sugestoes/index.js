import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import estilos from './estilo';
import emailjs from '@emailjs/browser';

export default function Sugestoes({ info }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail() {
        if (name === '' || email === '' || telefone === '' || message === '') {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            telefone: telefone,
        };

        emailjs.send("service_pwojcnu", "template_d53josc", templateParams, "9S6oga67WanvP_pqs")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                Alert.alert("Sucesso", "Email enviado com sucesso!");
                setName('');
                setEmail('');
                setTelefone('');
                setMessage('');
            }, (err) => {
                console.log("ERRO: ", err);
                Alert.alert("Erro", "Não foi possível enviar o email.");
            });
    }

    return (
        <ScrollView style={estilos.container}>
            <Image source={info.logo} style={estilos.logo} resizeMode='contain' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <TextInput
                    placeholder='Digite seu nome'
                    style={estilos.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <TextInput
                    placeholder='Digite seu email'
                    style={estilos.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    placeholder='Telefone'
                    keyboardType='numeric'
                    style={estilos.input}
                    onChangeText={(text) => setTelefone(text)}
                    value={telefone}
                />
                <TextInput
                    placeholder='Digite sua sugestão'
                    style={estilos.input_sugestao}
                    onChangeText={(text) => setMessage(text)}
                    value={message}
                />

                <TouchableOpacity onPress={sendEmail} style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
