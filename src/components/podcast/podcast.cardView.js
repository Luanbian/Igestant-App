import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import { style } from '../../style/podcast/podcast.style';
import Slider from "@react-native-community/slider";

export default function PodCardView({ name, refe, audio, image }) {
  const [play, setplay] = useState();
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sound, setSound] = useState(null);

  const playSound = async (audio) => {
    try {
      const { sound } = await Audio.Sound.createAsync(audio)
      const { durationMillis } = await sound.getStatusAsync()
      await sound.playAsync();
      setDuration(durationMillis)
      setplay(true);
      setSound(sound);
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

  const onSliderValueChange = async (value) => {
    setPosition(value)
    if (sound) {
      await sound.setPositionAsync(value)
    }
  }

  useEffect(() => {
    const updatePosition = async () => {
      if(sound) {
        const {positionMillis} = await sound.getStatusAsync()
        setPosition(positionMillis)
      }
    }
    const intervalId = setInterval(updatePosition, 1000)
    return () => clearInterval(intervalId)
  }, [sound])

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
        <Slider 
          value={position}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={onSliderValueChange}
          onSlidingComplete={onSliderValueChange}
        />
        <Text>
          {position.toFixed(2)} - {duration.toFixed(2)}
        </Text>
    </View>
  );
}
