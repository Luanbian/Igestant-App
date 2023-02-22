import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/imgs/logo.png';
import facebook from '../../../assets/imgs/facebookLogo.png'
import instagram from '../../../assets/imgs/instagramLogo.png'

export default function Rede() {
  return (
    <View style={style.container}>
      <Image source={logo} />
      <View style={style.posiLabel}>
        <Image source={facebook} style={style.social}/>
        <Text style={style.label}>Facebook</Text>
      </View>
      <View style={style.posiLabel}>
        <Image source={instagram} style={style.social}/>
        <Text style={style.label}>Instagram</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  social: {
    width: 70,
    height: 70
  },
  posiLabel: {
    flexDirection: 'row',
    marginBottom: '5%'
  },
  label: {
    alignSelf: 'center',
    marginLeft: '15%',
    fontFamily: 'PoppinsRegular',
    fontSize: 24
  }
})