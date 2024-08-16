import React from "react";
import { SafeAreaView, View, Text ,TextInput} from "react-native";

import styles from "./Input.style";

function Input({label, onChangeText, placeholder}){
return(
    <SafeAreaView>
    <Text style= {styles.label}>{label}</Text>
    <View style={styles.input_container}>
    <TextInput placeholder= {placeholder} onChangeText={onChangeText}/>
     </View>
    </SafeAreaView>
)
}

export default Input;