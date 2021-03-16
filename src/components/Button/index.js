import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export default function Button(props) {
  const {borderColor, backgroundColor, textColor, text, onPress} = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {borderColor: borderColor, backgroundColor: backgroundColor},
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
}
