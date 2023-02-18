import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import card from '../../../public/assets/card.pod';

export default function PodCardView() {
  const [play, setplay] = useState();
  const [sound, setSound] = useState(card);

  const playSound = async (audio) => {
    try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync(require(`../../../public/sound/beats.mp3`));
        await soundObject.playAsync();
    } catch (error) {
        console.log(error);
    }
};

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
        </View>
      ))}
    </View>
  );
}
