import React, { PureComponent } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';

export default class ReactVRSample extends PureComponent {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <Text style={styles.text}>
          React VR Sample
        </Text>
        <Text style={styles.text}>
          by @rodrigooler
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#777879',
    fontSize: 0.3,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{ translate: [0, 0, -3] }],
  },
});

AppRegistry.registerComponent('ReactVRSample', () => ReactVRSample);
