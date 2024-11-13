import react from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import Texto from '../../componentes/Texto';
import styles from './estilos';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";



export default function ListaItem ({id, nome, imagem}){

    const navigation = useNavigation();

    //Função para remover itens da lista de desejos
    async function removeProdListaDesejos(id){

        //Captura a lista de desejos
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lista de desejos em array
        const listaDesejos = JSON.parse(listaDesejosSalva);

        //Exclui o item e transforma em string para atualizar o AsyncStorage
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item)=> item.id !== id));

        //Atualiza o AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("Produtos removido da lista de Desejos!");
        console.log("Removeu item da lista."); 

        // Atualiza a tela da Lista de Desejos
        navigation.reset({index: 0, routes: [{name:'Lista de Desejos'}],});

    }

    return (
    <View style={styles.cardContainer}>
        <Card mode='contained' style={styles.card}>
            <Card.Content style={styles.contentContainer}>
            <View style={styles.infoContainer}>
                <Card.Cover source={imagem} style={styles.imagem}/>
                <Texto style={styles.nomeProduto}>{nome}</Texto>
            </View>
                <TouchableOpacity onPress={()=>removeProdListaDesejos(id)}>
                    <Ionicons name='trash' size={30} color="red"/>
                </TouchableOpacity>
            </Card.Content>
        </Card>
    </View>
    );
}