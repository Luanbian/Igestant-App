import React from 'react';
import { View, FlatList } from 'react-native';
import card from '../../../public/assets/card.pod';
import PodCardView from './podcast.cardView';

export default function PodCard () {
  return (
    <View>
      <FlatList
        data={card}
        renderItem={({item}) => <PodCardView name={item.name} refe={item.refe} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}