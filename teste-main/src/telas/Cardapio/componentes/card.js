import React, { useState } from 'react';
import { TouchableOpacity, Text, Modal, Pressable, View, Image, Alert} from 'react-native';
import { Card } from 'react-native-paper';
import styles from "../estilo";    
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function CardProd({ item: {id, nome, imagem, valor } }) {
    const [modalVisible, setModalVisible, open, setOpen] = useState(false);
    
    async function addListaDesejos(id, nome, imagem, valor){
        
        // Produto favoritado
        const addProduto=[{
            id: id,
            nome: nome,
            imagem: imagem,
            valor: valor,
        }];

        //Verificar se a lista está vazia
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        
        if(listaDesejosSalva == null){
            //Lista Vazia, insere o produto clicado
            const ListaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', ListaDesejosAtualizada);

            Alert.alert("O produto foi incluído com sucesso na Lista de Desejos!")
            console.log("Adicionou produto");
            console.log(ListaDesejosAtualizada);
        } else {
            // A lista já possui itens
            const ListaDesejos = JSON.parse(listaDesejosSalva);

            //insere mais um produto na lista
            ListaDesejos.push({id: id, nome: nome, imagem: imagem});

            //Converte o array para string
            const ListaDesejosAtualizada = JSON.stringify(ListaDesejos);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', ListaDesejosAtualizada);
            Alert.alert("O produto foi incluído com sucesso na Lista de Desejos!")
            console.log("Adicionou mais um produto na lista");
            console.log(ListaDesejosAtualizada);
        }
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Card>
                    <Card.Cover style={styles.imgProd} source={imagem} />
                    <Card.Content style={styles.container}>
                        <Text variant="titleLarge" style={styles.tituloCard}>{nome}</Text>
                        <Text variant="bodyMedium" style={styles.descricao}>{valor}</Text>
                        <TouchableOpacity onPress={()=>addListaDesejos(id, nome, imagem, valor)}>
                            <Ionicons name='heart' size={30} color="red"/>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.tituloCard, { marginTop: 20 }]}>{nome}</Text>
                        <Image style={styles.imgModal} source={imagem} />
                        <Text style={styles.descricao}>{valor}</Text>
                        <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
