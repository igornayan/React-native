import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from './Moura.png'
import Voltar from './voltar.png'

export default function Page2() {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity style={styles.button} onPress={()=> console.warn("clicou")}>
                    <Image source={Voltar} style={{resizeMode:'contain', width: 20}}></Image>
                </TouchableOpacity>
                <Image source={Logo} style={{resizeMode:'contain', width: 30, borderWidth: 5}}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#555556',
        justifyContent: 'flex-start',
    },
})
