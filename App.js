import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Class Component:
export default class App extends React.Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start', 'flex-end', 'center', 'stretch'
      <View style={styles.container}>
        <Text style={styles.headerStyle}> Position Flex</Text>
        <View style={styles.elementsContainer}>
          <View style={styles.red}>
            <View style={styles.green} />
            <View style={styles.gray} />
          </View>
          <View style={styles.yellow} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  green: {
    backgroundColor: '#32B76C',
    height: '100%',
    flex: 1,
  },
  gray: {
    backgroundColor: 'gray',
    height: '100%',
    flex: 3,
  },
  yellow: {
    flex: 1,
    backgroundColor: '#FAA030',
    height: '100%',
  },
  red: {
    flex: 2,
    backgroundColor: '#EE2C38',
    height: '100%',
  },
  container: {
    marginTop: 48,
    flex: 1,
    flexDirection: 'column',
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 24,
  },
  elementsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#ecf5fd',
    height: 100,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
});
