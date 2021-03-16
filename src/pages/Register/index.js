import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Button from '~/components/Button';
import Header from '~/components/Header';

import TextInputWithTitle from '~/components/TextInputWithTitle';

import styles from './styles';

const Register = (props) => {
  const {navigation} = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Header
        onPress={() => {
          navigation.pop();
        }}
        title=""
        headerColor="#075e54"
      />
      <ScrollView
        style={styles.scrollview}
        behavior="position"
        keyboardVerticalOffset={60}>
        <View style={styles.background}>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.titleTwo}>New Account</Text>
          <Text style={styles.subtitle}>
            Preencha os campos abaixo para realizar o seu cadastro:
          </Text>
          <TextInputWithTitle title="Nome" value={name} />
          <TextInputWithTitle title="E-mail" value={email} />
          <TextInputWithTitle title="Senha" value={password} />
          <TextInputWithTitle title="Confirmar Senha" value={confirmPassword} />
          <Button
            text="Cadastrar"
            backgroundColor="#075e54"
            borderColor="#075e54"
            textColor="#FFFF"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Register;
