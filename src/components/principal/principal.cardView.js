import { Text, View, Button, Image } from "react-native";
import { useState } from "react";

export default function PrincipalCardView({ name, description, resposta, refe, image }) {
  const [show, setShow] = useState();

  const press = () => {
    setShow(true);
  };

  const pressed = () => {
    setShow(false);
  };

  return (
    <View>
      {!show && (
        <>
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Image source={image} style={{width: 108, height: 105}}/>
          <Button title="saiba mais" onPress={() => press()} />
        </>
      )}
      {show && (
        <>
          <Text>{resposta}</Text>
          <Text>{refe}</Text>
          <Button title="voltar" onPress={() => pressed()} />
        </>
      )}
    </View>
  );
}
