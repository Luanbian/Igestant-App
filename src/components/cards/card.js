import React from 'react';
import { View, FlatList, Text } from 'react-native';
import cards from '../../../public/assets/card.info';

const Item = ({name}) => (
  <View>
    <Text>{name}</Text>
  </View>
)

export default function Card () {
  return (
    <View>
      <FlatList
        data={cards}
        renderItem={({item}) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}