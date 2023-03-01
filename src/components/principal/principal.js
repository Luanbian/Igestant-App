import React, { useMemo, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import datasPrincipal from "./info.principal";
import PrincipalCardView from "./principal.cardView";
import { style } from "../../style/principal/principal.style";

export default function PrincipalCard() {
  const [search, setSearch] = useState("");

  const data = useMemo(() => {
    if (search) {
      const newData = datasPodcast.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return newData;
    } else {
      return datasPrincipal
    }
  }, [search]);

  return (
    <>
      <View style={style.posiSearch}>
        <TextInput
          placeholder="pesquise"
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={style.search}
        />
        <Ionicons name="search" style={style.searchIcon} />
      </View>
      <View style={style.posiList}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PrincipalCardView
              name={item.name}
              description={item.description}
              image={item.image}
              resposta={item.resposta}
              refe={item.refe}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}
