import React from 'react';

import {
  Text,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import Button from '~/components/Button';
import TextWithLinkText from '~/components/TextWithLinkText';

import backgroundWpp from '../../assets/img/register-with-logo.png';
import logoWpp from '../../assets/img/logo-wpp.png';
import styles from './styles';

const Login = ({navigation}) => (
  <ImageBackground
    source={backgroundWpp}
    style={styles.container}
    resizeMode="cover">
    <Image source={logoWpp} style={styles.logo} resizeMode="contain" />
    <Text style={styles.welcome}>Welcome to</Text>
    <Text style={styles.whatsAppClone}>WhatsAppClone</Text>
    <TextInput style={styles.textInput} placeholder="E-mail" />
    <TextInput
      style={[
        styles.textInput,
        {marginTop: Dimensions.get('window').height * 0.04},
      ]}
      placeholder="Senha"
      secureTextEntry
    />
    <Button
      backgroundColor="#075e54"
      borderColor="#075e54"
      textColor="#FFFF"
      text="Entrar"
      onPress={() => {}}
    />
    <TextWithLinkText
      text="Se ainda não tiver um cadastro."
      linkText="Cadastra-se"
      onPress={() => {
        return navigation.navigate('Register');
      }}
    />
  </ImageBackground>
);

export default Login;
