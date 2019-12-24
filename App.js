import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Class Component:
class App extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.View1}>
          <Text> Hello There</Text>
        </View>
        <View style={styles.View2}>
          <Text> Welcom</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: 650,
    flexDirection: 'row',
    backgroundColor: '#20975764',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  View1: {
    backgroundColor: 'green',
    margin: 1,
    flex: 1,
  },
  View2: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flex: 0.5,
  },
  Text: {
    color: '#209',
  },
});

/* <View style={styles.Container}>
<Text style={styles.Text}> React Component </Text>
<Text> React Component </Text>
</View> */

// Function Component :
// import React from 'react';
// import {Text, View} from 'react-native';

// const App = () => {
//   return <Text> Hello World </Text>;
// };

// export default App;

// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.Container}>
//         <Text style={styles.textStyle}>I am using React Native</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textStyle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: 'blue',
//   },
// });

// export default App;
