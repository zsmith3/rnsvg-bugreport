import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Mask, Rect} from "react-native-svg";

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Svg>
            <Svg>
              <Rect width={100} height={100} fill="red" mask="url(#testmask)" />
              <Mask id="testmask">
                <Rect width={100} height={100} fill="white" />
                <Rect width={20} height={20} fill="black" />
              </Mask>
            </Svg>
          </Svg>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 100,
    height: 100,
  },
});
