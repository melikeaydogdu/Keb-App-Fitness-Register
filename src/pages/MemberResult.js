import React, { useState } from "react";
import { Text, View, SafeAreaView,StyleSheet } from "react-native";

import Button from "../components/Button";
import Welcome from "./Welcome";

function MemberResult({ route ,navigation}) {
    const { user } = route.params || {}; // Eğer `route.params` tanımlı değilse, boş bir nesne kullanır.
    
    return (
        <SafeAreaView>
            <View>
            <Text style = {styles.text}>KAYIT TAMAMLANDI</Text>
            <Text style={styles.header}>ÜYE BİLGİLERİ:</Text>
            <Text style={styles.label}>Adı: {user?.userName }</Text>
            <Text style={styles.label}>Soyadı: {user?.userSurname}</Text>
            <Text style={styles.label}>Yaşı: {user?.userAge}</Text>
            <Text style={styles.label}>E-Posta: {user?.userMail}</Text>
            </View>
            <View>
        <Button text= "Anasayfa İçin Tıklayınız" onPress={()=>navigation.navigate('Welcome')}/>
            </View>
        </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    label: {
        fontSize: 20,
        margin: 8,
        fontWeight: 'bold',
        marginBottom:13,
    },
    header:{
        textAlign: 'center',
        fontSize:25,
        color: 'black',
        fontWeight:'bold',
    },
    text: {
        fontSize:30,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight:'bold',
        marginTop:35,
        marginBottom:15,
        color: 'darkred',
    }
});
export default MemberResult;