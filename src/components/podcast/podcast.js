import React, {useState} from "react";
import { View, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import datasPodcast from "./info.podcast";
import PodCardView from "./podcast.cardView";

export default function PodcastCard() {
  const [filteredData, setFilteredData] = useState(datasPodcast);
  const [search, setSearch] = useState("");

  function searchFilter(text) {
    if (text) {
      const newData = datasPodcast.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(datasPodcast);
      setSearch(text);
    }
  }
  return (
    <View>
      <TextInput placeholder="pesquise" value={search} onChangeText={(text) => searchFilter(text)} />
      <Ionicons name="search" />
      <FlatList
        data={ filteredData || datasPodcast}
        renderItem={({ item }) => (
          <PodCardView name={item.name} refe={item.refe} audio={item.audio} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
