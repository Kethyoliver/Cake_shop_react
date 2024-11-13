
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    botao: {
        backgroundColor: '#C7830D',
        padding: 10,
        marginTop: 20,
        alignItems: 'left',
        borderRadius: 5,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
    logo: {
        width: 200,
        height: 300,
        alignSelf: "center",
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
        paddingHorizontal: 10, 
    },
    cep: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 10,
        width: '80%',
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    
});


export default estilos;

