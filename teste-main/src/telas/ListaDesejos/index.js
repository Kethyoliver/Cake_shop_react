import React, {useState, useEffect} from "react";
import { View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Texto  from "../../componentes/Texto";
import ListaItem from './listaItem';
import styles from './estilos';
import Botao from '../../componentes/BotaoAdd'
import { useNavigation } from "@react-navigation/native";

export default function Index(){

    const [listData, setListData] = useState([]);

    // função para capturar os dados do AsyncStorage
    const loadListData = async ()  => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Carrega a lista quando o componente for montado

useEffect(()=>{
    loadListData();
}, []);

    const navigation = useNavigation();


    //Função para limpar lista de desejo

    const clearAsyncStorage = async () => {
        await AsyncStorage.clear();
        console.log('AsyncStorage apagado com sucesso');
        Alert.alert("Lista de Desejo foi excluída com sucesso.");
        navigation.reset({index: 0, routes: [{name:'Lista de Desejos'}]});
    }

    return <View style={styles.listaContainer}>

        <Texto style={styles.titulo}>Lista de Desejos</Texto>
        <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua lista de Desejos!</Texto>

        <FlatList
            style={styles.lista}
            data = {listData}
            renderItem={({item})=> <ListaItem {...item}/>}
            keyExtractor={((item) => item.id)}
            numColumns={1}
        />
        <Botao textoBotao={'Apagar Lista de Desejos'} clickBotao={()=> clearAsyncStorage()}/>
    </View>
}