/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Styles from '../styles';

export const Incoming = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: '90%',
        borderRadius: 10,
      }}>
      <View style={{alignSelf: 'center', marginTop: '4%'}}>
        <Text style={{fontSize: 15,color:'white'}}>Movimentação</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '70%',
          alignSelf: 'center',
          marginTop: '5%',
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 12, color:'white'}}>Recebi</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 12,color:'white'}}>Gastei</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            height: '15%',
            marginTop: '10%',
            borderColor: 'grey',
            borderWidth: 0.17,
            fontSize: 15,
            paddingLeft: '5%',
          }}
          placeholderTextColor={'grey'}
          placeholder="De onde recebi ?"
        />
        <TextInput
          style={{
            height: '15%',
            borderColor: 'grey',
            borderWidth: 0.17,
            fontSize: 15,
            paddingLeft: '5%',
          }}
          placeholderTextColor={'grey'}
          placeholder="E quanto foi ?"
        />
        <TextInput
          style={{
            height: '15%',
            borderColor: 'grey',
            borderWidth: 0.17,
            fontSize: 15,
            paddingLeft: '5%',
          }}
          placeholderTextColor={'grey'}
          placeholder="Titulo"
        />
        <TextInput
          style={{
            height: '20%',
            borderColor: 'grey',
            borderWidth: 0.17,
            fontSize: 15,
            paddingLeft: '5%',
          }}
          placeholderTextColor={'grey'}
          placeholder="Mensagem"
        />
        <View
          style={{
            backgroundColor: 'grey',
            width: '40%',
            alignSelf: 'center',
            marginTop: '4%',
            borderRadius: 20,
          }}>
          <Button color={'white'} title="Enviar" />
        </View>
      </View>
    </View>
  );
};
