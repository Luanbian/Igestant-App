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
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    marginLeft: '2%'
  },
  description: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    width: "67%",
    marginTop: '3%'
  },
  image: {
    width: 108,
    height: 105,
    borderRadius: 15
  },
  posiDescImg: {
    flexDirection: 'row',
    marginBottom: '2%',
    marginLeft: '2%'
  },
  button: {
    backgroundColor: '#B6DBF2',
    borderRadius: 20,
    width: 108
  },
  posiButton: {
    alignItems: 'flex-end',
    marginEnd: '5%'
  },  
  label: {
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: 13
  },
  resposta: {
    fontFamily: 'PoppinsLight',
    fontSize: 13,
    marginBottom: '2%'
  },
  refe: {
    fontFamily: 'PoppinsExtraLight',
    fontSize: 10
  },
  posiResRefe: {
    marginBottom: '2%',
    marginLeft: '2%',
    marginEnd: '3%'
  },
  search: {
    backgroundColor: '#B6DBF2',
    borderRadius: 20,
    paddingLeft: 25,
    marginLeft: 10,
    marginBottom: 10,
    width: '85%'
  },
  searchIcon: {
    marginLeft: 10,
    fontSize: 16,
    marginTop: 4
  },
  posiSearch: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-start' 
  }
});
