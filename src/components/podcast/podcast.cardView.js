import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";

export default function PodCardView({ name, refe, audio, image }) {
  const [play, setplay] = useState();
  const [sound, setSound] = useState(null);

  const playSound = async (audio) => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(audio);
      await soundObject.playAsync();
      setplay(true);
      setSound(soundObject);
    } catch (error) {
      console.log(error);
    }
  };

  const pauseSound = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        setplay(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const replaySound = async () => {
    try {
      if (play) {
        await sound.replayAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>{refe}</Text>
      <Image source={image} style={{width: 108, height: 105}}/>
      {!play && (
        <TouchableOpacity onPress={() => playSound(audio)}>
          <Ionicons name="play" size={20} />
        </TouchableOpacity>
      )}
      {play && (
        <TouchableOpacity onPress={() => pauseSound()}>
          <Ionicons name="pause" size={20} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => replaySound()}>
        <Ionicons name="sync" size={20} />
      </TouchableOpacity>
    </View>
  );
}
