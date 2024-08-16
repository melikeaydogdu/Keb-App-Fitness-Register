import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';

function Welcome ({navigation}) {

  return (
    <View style = {styles.container}>
        <Text style = {styles.header}>KEB-APP FITNESS SALONU</Text>
      <Button text= "Üye Kaydı Oluştur" onPress= {()=>navigation.navigate('MemberSignScreen')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom:20,
    color: 'black'
  },
});
export default Welcome;
