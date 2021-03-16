import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const TextWithLinkText = (props) => {
  const {text, linkText, onPress} = props;
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.register}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.register, {marginLeft: '4%', fontWeight: 'bold'}]}>
          {linkText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextWithLinkText;
