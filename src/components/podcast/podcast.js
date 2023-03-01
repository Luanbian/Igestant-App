import React, { useMemo, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import datasPodcast from "./info.podcast";
import PodCardView from "./podcast.cardView";
import { style } from "../../style/podcast/podcast.style";

export default function PodcastCard() {
  const [search, setSearch] = useState("");

  const data = useMemo(() => {
    if (search) {
      const newData = datasPodcast.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return newData
    } else {
      return datasPodcast
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
            <PodCardView
              name={item.name}
              refe={item.refe}
              audio={item.audio}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}
