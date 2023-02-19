import React, {useState} from "react";
import { View, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import datasPrincipal from "./info.principal";
import PrincipalCardView from "./principal.cardView";

export default function PrincipalCard() {
  const [filteredData, setFilteredData] = useState(datasPrincipal);
  const [search, setSearch] = useState("");

  function searchFilter(text) {
    if (text) {
      const newData = datasPrincipal.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(datasPrincipal);
      setSearch(text);
    }
  }

  return (
    <View>
      <TextInput placeholder="pesquise" value={search} onChangeText={(text) => searchFilter(text)} />
      <Ionicons name="search" />
      <FlatList
        data={ filteredData || datasPrincipal}
        renderItem={({ item }) => (
          <PrincipalCardView
            name={item.name}
            description={item.description}
            resposta={item.resposta}
            refe={item.refe}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}