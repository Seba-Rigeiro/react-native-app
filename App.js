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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Cuenta"
          style={styles.input}
          onChangeText={handleChangeTextAccount}
          value={accountValue}
        /><TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={handleChangeTextPassword}
        value={passwordValue}
      />
        <Button
         color="#485B58" title="Agregar"onPress={handleAddAccount}
        />
      </View>
      <View style={styles.items}>
        <FlatList
          data={accountList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.account} key={item.id}>
              <Text> Cuenta: {item.account} </Text>
              <Text> Password: {item.password}</Text> 
              <Button color="#485B58" title="X" onPress={() => handleRemoveAccount(item.id)} />
            </View>
          )}
        />
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 50,
    width: 400,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    backgroundColor: '534B4F'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 300,
  },
  items: {
    backgroundColor: '#DFE5DC',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  account: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
  },
  deleteButton: {
    
  }
});
