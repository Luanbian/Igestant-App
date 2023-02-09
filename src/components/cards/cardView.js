import { Text, View, Button } from "react-native";

export default function CardView({name, description}) {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Button 
                title='saiba mais'
            />
        </View>
    )
}