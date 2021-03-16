import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
export default function Header(props) {
  const {onPress, title, headerColor} = props;
  return (
    <View style={[styles.container, {backgroundColor: headerColor}]}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Icon name="arrow-left" size={24} color="#075e54" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
