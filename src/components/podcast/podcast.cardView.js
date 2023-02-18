import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import card from './card.pod';

export default function PodCardView() {
  const [play, setplay] = useState();
  const [sound, setSound] = useState(null);

  const playSound = async (audio) => {
    try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync(audio);
        await soundObject.playAsync();
        setplay(true)
        setSound(soundObject)
    } catch (error) {
        console.log(error);
    }
  };

  const pauseSound = async () => {
    try {
      if (sound) {
        await sound.pauseAsync()
        setplay(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const replaySound = async () => {
    try {
      if (sound) {
        await sound.replayAsync()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      {card.map((sound) => (
        <View key={sound.id}>
          <Text>{sound.name}</Text>
          <Text>{sound.refe}</Text>
          <TouchableOpacity
            onPress={() => playSound(sound.audio)}
          >
            <Ionicons name="play" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pauseSound()}
          >
            <Ionicons name="pause" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => replaySound()}
          >
            <Ionicons name="sync" size={20}/>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
