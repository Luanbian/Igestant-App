import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import { style } from '../../style/podcast/podcast.style';

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
    <View style={style.card}>
      <Text style={style.title}>{name}</Text>
      <Text style={style.refe}>{refe}</Text>
      <View style={style.posiImgBtn}>
        <View style={style.posiButtons}>
          {!play && (
            <TouchableOpacity onPress={() => playSound(audio)}>
              <Ionicons name="play" size={25} />
            </TouchableOpacity>
          )}
          {play && (
            <TouchableOpacity onPress={() => pauseSound()}>
              <Ionicons name="pause" size={25} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => replaySound()} style={style.replay}>
            <Ionicons name="sync" size={25} />
          </TouchableOpacity>
        </View>
        <View style={style.posiImg}>
          <Image source={image} style={style.image}/>
        </View>
      </View>
    </View>
  );
}
