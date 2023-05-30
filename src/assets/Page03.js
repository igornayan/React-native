import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Logo from './Moura.png'
import Voltar from './voltar.png'
import Pessoinha from './ico-pessoa.png'
import { useNavigation } from '@react-navigation/native';


export default function Page3() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding: 10}}>
              <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Page01')}>
                  <Image source={Voltar} style={{width: 20, height:20}}></Image>
              </TouchableOpacity>
              <Image source={Logo} style={{width: 40, height: 40, marginRight: 20}}/>
            </View>

            <View style={{alignItems:'center', justifyContent:'flex-start', marginTop:30,flex:1}}>
              <Text style={styles.fonte}>Nome da turma</Text>
              <Text style={{color:"#BFBFBF", fontSize:15, marginTop:5}}>Adicione a galera e separe os times</Text>
              <TextInput style={{borderWidth: 2, width: 300, height: 50, borderRadius: 7, marginTop: 10, padding: 10, backgroundColor:'#262626', color: 'white'}}placeholder="Nome do participante" placeholderTextColor={'#BFBFBF'}></TextInput>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{marginTop:20, marginRight:10, borderWidth:3, borderColor:'green', padding:6, borderRadius:5}} onPress={()=> console.warn("clicou")}>
                  <Text style={styles.fonte}>TIME A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20, padding:6, borderRadius:5}} onPress={()=> console.warn("clicou")}>
                  <Text style={styles.fonte}>TIME B</Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row', alignItems:'center', width: 300, height: 50, borderRadius: 7, marginTop: 10, padding: 10, backgroundColor:'#404040'}}>
                <Image source={Pessoinha} style={{width: 20, height:20}}/>
                <Text style={{color:'#BFBFBF'}}>Igor Nayan</Text>
              </View>
            </View>
            
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems:'center'}}>
              <TouchableOpacity style={styles.buttonBaixo} onPress={()=> console.warn("clicou")}>
              <Text style={styles.fonte}>Remover turma</Text>
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

      buttonBaixo: {
        marginBottom: 50,
        borderRadius: 7,
        padding: 10,
        width: 350,
        height: 70,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      },
      
      fonte: {
        color: "white",
        fontSize: 20, 
        fontWeight: 'bold'
      },

      buttonBaixo: {
        marginBottom: 50,
        borderRadius: 7,
        padding: 10,
        width: 350,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
      }
})