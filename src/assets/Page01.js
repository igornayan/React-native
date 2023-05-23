import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from './Moura.png'

export default function Page1() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{resizeMode:'contain', width: 80}}/>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Turmas</Text>
      <Text style={{color:'#BFBFBF', marginBottom: 20}}>Jogue com a sua turma</Text>
      <TouchableOpacity style={styles.button} onPress={()=> console.warn("clicou")}>
        <Text style={styles.fonte}>Nome da Turma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> console.warn("clicou")}>
        <Text style={styles.fonte}>Nome da Turma</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  fonte: {
    color: "white",
    fontSize: 14, 
    fontWeight: 'bold'
  },

  button: {
    alignItems: 'flex-start',
    backgroundColor: '#8C8C8C',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 7,
    padding: 10,
    width: 350,
    height: 70,
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
  }
});
