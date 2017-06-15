import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class ReactVRSample extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }],
          }}
        >
          React VR Sample
        </Text>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }],
          }}
        >
          by @rodrigooler
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactVRSample', () => ReactVRSample);
