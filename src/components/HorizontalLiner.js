import React from 'react';
import {View} from 'react-native';
import Color from '../constants/Color';

function HorizontalLiner() {
  return (
    <View
      style={{
        borderBottomColor: Color.LINER,
        marginHorizontal: 15,
        borderBottomWidth: 0.8,
      }}
    />
  );
}

export default HorizontalLiner;
