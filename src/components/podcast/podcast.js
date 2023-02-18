import React from 'react';
import { View, FlatList } from 'react-native';
import datasPodcast from './info.podcast';
import PodCardView from './podcast.cardView';

export default function PodcastCard() {
  return (
    <View>
      <FlatList
        data={datasPodcast}
        renderItem={({item}) => 
          <PodCardView
            name={item.name} 
            refe={item.refe}
            audio={item.audio}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}