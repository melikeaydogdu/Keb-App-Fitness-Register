import React, { useState } from "react";
import { Text, View, SafeAreaView, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

function MemberSign({navigation}) {
   const [userName, setUserName] = useState(null);
   const [userSurname, setUserSurname] = useState(null);
   const [userAge, setUserAge] =useState(null);
   const [userMail, setUserMail]= useState(null);


function handleSubmit(){
    if(!userName || !userSurname || !userAge || !userMail){
        Alert.alert('Keb-App Fitnes Salonu', "Bilgiler boş bırakılamaz!");
        return;
    }
    const user = {
        userName,
        userSurname,
        userAge,
        userMail,
    };

navigation.navigate('MemberResultScreen', {user});
}
  return (
    <SafeAreaView>
      <View>
        <Input label="İsim: " placeholder="Üye İsmini Giriniz: "
        onChangeText={setUserName} />
        <Input label="Soyisim:" placeholder="Soyadını Giriniz: "
        onChangeText={setUserSurname} />
        <Input label="Yaş:" placeholder="Yaşı Giriniz: " onChangeText={setUserAge} />
        <Input label="E-posta:" placeholder="E-posta Giriniz: " onChangeText={setUserMail}/>
        <Button text="Kayıt Tamamla" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

export default MemberSign;
