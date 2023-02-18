import { Text, View, Button } from "react-native";
import { useState } from "react";

export default function PrincipalCardView({ name, description, resposta, refe }) {
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
