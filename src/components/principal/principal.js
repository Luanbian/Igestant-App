import React from 'react';
import { View, FlatList } from 'react-native';
import datasPrincipal from './info.principal';
import PrincipalCardView from './principal.cardView';

export default function PrincipalCard() {
  return (
    <View>
      <FlatList
        data={datasPrincipal}
        renderItem={({item}) => 
          <PrincipalCardView 
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