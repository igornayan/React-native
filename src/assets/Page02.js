import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from './Moura.png'
import Voltar from './voltar.png'

export default function Page2() {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding: 10, borderWidth: 2, borderColor: 'green'}}>
                {<TouchableOpacity style={styles.button} onPress={()=> console.warn("clicou")}>
                    <Image source={Voltar} style={{width: 20, height:20}}></Image>
                </TouchableOpacity>}
                <Image source={Logo} style={{width: 30, height: 30}}/>
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
    button: {
        alignItems: 'flex-start',
        backgroundColor: '#8C8C8C',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 7,
        padding: 10,
      },
})
