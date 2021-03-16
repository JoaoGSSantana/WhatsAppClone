import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

export default function TextInputWithTitle(props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  );
}
