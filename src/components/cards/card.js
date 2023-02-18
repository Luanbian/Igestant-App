import React from 'react';
import { View, FlatList } from 'react-native';
import cards from './card.info';
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
            resposta={item.resposta}
            refe={item.refe}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}