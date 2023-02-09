import { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PodCardView({name, refe}) {
    const [play, setplay] = useState()

    const press = () => {
        setplay(true)
    }

    const pressed = () => {
        setplay(false)
    }

    const replay = () => {
        // reload podcast
    }

    return(
        <View>
            <Text>{name}</Text>
            <Text>{refe}</Text>
            {!play && (
                <TouchableOpacity onPress={press}>
                    <Ionicons name="play" size={20} />
                </TouchableOpacity>
            )}
            {play && (
                <TouchableOpacity onPress={pressed}>
                    <Ionicons name="pause" size={20} />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={replay}>
                <Ionicons name="sync" size={20} />
            </TouchableOpacity>
        </View>
    )
}