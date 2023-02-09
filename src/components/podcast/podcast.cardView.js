import { Text, View } from "react-native";

export default function PodCardView({name, refe}) {
    return(
        <View>
            <Text>{name}</Text>
            <Text>{refe}</Text>
        </View>
    )
}