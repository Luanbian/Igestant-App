import React from 'react';
import { View, FlatList, Text } from 'react-native';
import card from '../../../public/assets/card.pod';

const Item = ({name}) => (
  <View>
    <Text>{name}</Text>
  </View>
)

export default function PodCard () {
  return (
    <View>
      <FlatList
        data={card}
        renderItem={({item}) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}