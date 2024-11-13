
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
        marginTop: 10,
        alignItems: 'center',
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
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#C7830D',
        width: '80%',
        paddingHorizontal: 10, 
    },
    input_sugestao: {
        height: 100,
        borderColor: '#C7830D',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 10, 
    },
    texto: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    labelError:{
        alignSelf:'center',
        color:'#ff375b',
        marginBottom: 8,
    }
});


export default estilos;

