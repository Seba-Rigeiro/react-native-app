import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [accountValue, setAccountValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [accountList, setAccountList] = useState([]);

  const handleChangeTextAccount = (value) => {
    setAccountValue(value); 
  }

  const handleChangeTextPassword = (value) => {
   setPasswordValue(value); 
  }

  const handleAddAccount = () => {
    const newAccount = {
      account: accountValue,
      password:passwordValue,
      id: Math.random().toString(),
    };
    setAccountList([
      ...accountList, newAccount,
    ]);
    setAccountValue('');
    setPasswordValue('')
  }

  const handleRemoveAccount = (id) => {
   const newList = accountList.filter(item => item.id !== id);
   setAccountList(newList)
  }
  
  return (
    
    <View style={styles.container}>
      <Text>AGREGA TU CUENTA</Text>
      <StatusBar style="auto" />
      <View style={styles}>
        <TextInput
          placeholder="Cuenta"
          style={styles.inputContainer}
          onChangeText={handleChangeTextAccount}
          value={accountValue}
        /><TextInput
        placeholder="Password"
        style={styles.inputContainer}
        onChangeText={handleChangeTextPassword}
        value={passwordValue}
      />
        <Button
          title="Agregar"onPress={handleAddAccount}
        />
      </View>
      <View>
        <FlatList
          data={accountList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles} key={item.id}>
              <Text> Cuenta: {item.account} </Text>
              <Text> Password: {item.password}</Text> 
              <Button title="X" onPress={() => handleRemoveAccount(item.id)} />
            </View>
          )}
        />
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'rgb(212, 214, 185)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
});
