import React, { useState, useEffect } from 'react';

import {
  Container,
  TouchableOptions,
  OptionsText,
} from './styles';

import {Icon} from 'native-base';

import api from '../../services/api';


export default function Options({ navigation }) {

  const [name, setName] = useState('');

  return(
    <>
      <Container>
        <TouchableOptions onPress={() => navigation.navigate('ProfilePatient')}>
          <OptionsText>Perfil</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('Doubt')}>
          <OptionsText>Dúvidas</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Prescrição</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('RegisterDependent')}>
          <OptionsText>Dependentes</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Minha Agenda</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('MedicalInfo')}>
          <OptionsText>Ficha médica</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <Icon type='FontAwesome' name='power-off'
            style={{marginRight:5, fontSize:22}}
          />
          <OptionsText>Sair</OptionsText>
        </TouchableOptions>
      </Container>
    </>
  )
}
