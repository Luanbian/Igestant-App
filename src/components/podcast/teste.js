import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

const tracks = [
  {
    id: '1',
    title: 'Track 1',
    artist: 'Artist 1',
    audio: require('../../../public/sound/cat.mp3'),
  },
  {
    id: '2',
    title: 'Track 2',
    artist: 'Artist 2',
    audio: require('../../../public/sound/cat.mp3'),
  },
  {
    id: '3',
    title: 'Track 3',
    artist: 'Artist 3',
    audio: require('../../../public/sound/cat.mp3'),
  },
];

const MusicPlayer = () => {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sound, setSound] = useState(null);

  const handlePlay = async (id) => {
    const selectedTrack = tracks.find((track) => track.id === id);
    if (selectedTrack?.audio) {
      try {
        const { sound } = await Audio.Sound.createAsync(selectedTrack.audio);
        await sound.playAsync();
        setSound(sound);
      } catch (error) {
        console.error('Error playing audio', error);
      }
    }
  };

  const handleStop = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setPosition(0);
    }
  };

  const onSliderValueChange = async (value) => {
    setPosition(value);
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  const getTrackDuration = async (id) => {
    const selectedTrack = tracks.find((track) => track.id === id);
    if (selectedTrack?.audio) {
      try {
        const { sound } = await Audio.Sound.createAsync(selectedTrack.audio);
        const { durationMillis } = await sound.getStatusAsync();
        setDuration(durationMillis);
      } catch (error) {
        console.error('Error getting track duration', error);
      }
    }
  };

  useEffect(() => {
    const updatePosition = async () => {
      if (sound) {
        const { positionMillis } = await sound.getStatusAsync();
        setPosition(positionMillis);
      }
    };
    const intervalId = setInterval(updatePosition, 100);
    return () => clearInterval(intervalId);
  }, [sound]);

  return (
    <View>
      {tracks.map((track) => (
        <View key={track.id}>
          <Text>{track.title} - {track.artist}</Text>
          <Button title="Play" onPress={() => handlePlay(track.id)} />
          <Button title="Stop" onPress={handleStop} />
          <Slider
            value={position}
            minimumValue={0}
            maximumValue={duration}
            onValueChange={onSliderValueChange}
            onSlidingComplete={onSliderValueChange}
            disabled={!sound}
          />
          <Button title="Get Duration" onPress={() => getTrackDuration(track.id)} />
        </View>
      ))}
    </View>
  );
};

export default MusicPlayer;
