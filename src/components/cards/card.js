import React from 'react';
import { View, FlatList, Text } from 'react-native';
import cards from '../../../public/assets/card.info';
import CardView from './cardView';

export default function Card() {
  return (
    <View>
      <FlatList
        data={cards}
        renderItem={({item}) => 
          <CardView 
            name={item.name} 
            description={item.description}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}