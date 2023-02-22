import { View, Text, StyleSheet } from 'react-native';

const MyHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>iGestant</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 45,
    marginTop: '10%',
    marginBottom: '2%',
    backgroundColor: 'rgba(255, 95, 180, 0.74)',
    display: 'flex',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 30,
    marginLeft: '2%',
    fontFamily: 'DancingScript',
    color: '#FAFAFA'
  },
});

export default MyHeader;