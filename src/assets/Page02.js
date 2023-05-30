import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Logo from './Moura.png'
import Voltar from './voltar.png'
import { useNavigation} from '@react-navigation/native';

export default function Page2() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding: 10}}>
                {<TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Page01')}>
                    <Image source={Voltar} style={{width: 20, height:20}}></Image>
                </TouchableOpacity>}
                <Image source={Logo} style={{width: 40, height: 40, marginRight: 20}}/>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.fonte}>Nova turma</Text>
                <Text style={{color:"#BFBFBF", fontSize:15, marginTop:5}}>Crie uma nova turma para adicionar pessoas</Text>
                <TextInput style={{borderWidth: 2, width: 350, height: 50, borderRadius: 7, marginTop: 10, padding: 10, backgroundColor:'#262626', color: 'white'}}placeholder="Nome da turma" placeholderTextColor={'#BFBFBF'}></TextInput>
                <TouchableOpacity style={styles.buttonBaixo} onPress={()=> console.warn("clicou")}>
                    <Text style={styles.fonte}>Criar nova turma</Text>
                </TouchableOpacity>
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
      fonte: {
        color: "white",
        fontSize: 20, 
        fontWeight: 'bold'
      },
      buttonBaixo: {
        marginTop: 10,
        borderRadius: 7,
        padding: 10,
        width: 350,
        height: 60,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }
})
