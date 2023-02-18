import React from 'react';
import { View, FlatList } from 'react-native';
import card from './card.pod';
import PodCardView from './podcast.cardView';

export default function PodcastCard() {
  return (
    <View>
      <FlatList
        data={card}
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