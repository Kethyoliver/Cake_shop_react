import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
        height: 100,
        width: '100%',
        backgroundColor:'#C69286',
    },
    cardContainer: {
        width: '95%',
        height: 170,
    },
    contentContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems:'left',
    },
    imagem: {
        width: 100,
        height:100,
        marginRight: 5,
    },
    card: {
        width:'90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 10,
    },
    nomeProduto: {
        color: '#C7830D',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 4,
        textAlign: 'left',
        marginTop: 30,
    },
    titulo: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 50,
    },
    textoLista: {
        fontSize: 20,
        paddingBottom: 10,
        margin: 5,
        marginTop: 50,
        textAlign: 'center',
        color: 'white',
        fontWeight:'bold',
    },
    lista: {
        height: 100,
        paddingTop: 20,
        paddingBottom: 20,
    }
})

export default styles;