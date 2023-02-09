import { View, Text, StyleSheet } from 'react-native';

const MyHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Igestant</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyHeader;