import { Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { style } from "../../style/principal/principal.style";

export default function PrincipalCardView({ name, description, resposta, refe, image }) {
  const [show, setShow] = useState();

  const press = () => {
    setShow(true);
  };

  const pressed = () => {
    setShow(false);
  };

  return (
    <>
      {!show && (
        <View style={style.card}>
          <Text style={style.title}>{name}</Text>
          <View style={style.posiDescImg}>
            <Text style={style.description}>{description}</Text>
            <Image source={image} style={style.image}/>
          </View>
          <View style={style.posiButton}>
            <TouchableOpacity onPress={() => press()} style={style.button}>
              <Text style={style.label}>Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {show && (
        <>
          <Text style={style.title}>{name}</Text>
          <View style={style.posiResRefe}>
            <Text style={style.resposta}>{resposta}</Text>
            <Text style={style.refe}>{refe}</Text>
          </View>
          <View style={style.posiButton}>
            <TouchableOpacity onPress={() => pressed()} style={style.button}>
              <Text style={style.label}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}