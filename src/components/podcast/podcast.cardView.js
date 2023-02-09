import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';

export default function PodCardView({name, refe}) {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        (async () => {
            const soundObject = new Audio.Sound();
            try {
                await soundObject.loadAsync(require('../../../public/sound/Yamete.mp3'));
                setSound(soundObject);
            } catch (error) {
                console.log(error);
            }
        })();
    },[]);

    const playSound = async () => {
        try {
            await sound.playAsync()
            setplay(true)
        } catch (error) {
            console.log(error)
        }
    }
    
    const pause = async () => {
        try {
            await sound.pauseAsync()
            setplay(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    const replay = async () => {
        try {
            await sound.stopAsync();
            await sound.unloadAsync();
            const newSound = new Audio.Sound();
            await newSound.loadAsync(require('../../../public/sound/Yamete.mp3'));
            setSound(newSound);
        } catch (error) {
            console.log(error);
        }
    }
    
    const [play, setplay] = useState()
    return(
        <View>
            <Text>{name}</Text>
            <Text>{refe}</Text>
            {!play && (
                <TouchableOpacity onPress={playSound}>
                    <Ionicons name="play" size={20} />
                </TouchableOpacity>
            )}
            {play && (
                <TouchableOpacity onPress={pause}>
                    <Ionicons name="pause" size={20} />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={replay}>
                <Ionicons name="sync" size={20} />
            </TouchableOpacity>
        </View>
    )
}