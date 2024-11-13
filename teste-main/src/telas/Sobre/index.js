import React from "react";
import { Image, ScrollView } from 'react-native';
import styles from './estilos';
import Texto from '../../componentes/Texto';
import textoLocal from '../../componentes/Texto'
import { Video, ResizeMode } from 'expo-av';
import BOLO from '../../../assets/BOLO.mp4'; 

export default function Index({ info }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <ScrollView style={styles.container}>

            <Image source={info.logo} style={styles.logo} resizeMode='contain' />
            <Texto style={styles.textoSobre}>{info.texto_sobre}</Texto>
            <Image source={info.loja} style={styles.logo} resizeMode='contain' />

            <Video
                ref={video}
                style={styles.video}
                source={BOLO} 
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            
        </ScrollView>
    );
}
