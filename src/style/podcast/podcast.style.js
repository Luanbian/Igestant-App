import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    card: {
        marginBottom: '2%',
        padding: 5,
        borderColor: '#d3d3d3',
        borderWidth: 2,
        borderRadius: 20
    },
    title: {
        marginLeft: '2%',
        fontFamily: 'PoppinsRegular',
        fontSize: 18
    },
    refe: {
        marginLeft: '2%',
        fontFamily: 'PoppinsExtraLight',
        fontSize: 16
    },
    image: {
        width: 108,
        height: 105,
        borderRadius: 15
    },
    posiImg: {
        marginRight: '2%'
    },
    replay: {
        marginLeft: '15%'
    },
    posiButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: '25%',
    },
    posiImgBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})