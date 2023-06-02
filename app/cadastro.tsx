import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-sphare.png')} style={styles.logoImage} />
      <Text style={styles.logo}>Sphare</Text>
      <Text style={styles.logo2}>A tecnologia da inovação impulsiona o progresso humano, abrindo novas possibilidades e transformando a maneira como vivemos, trabalhamos e nos relacionamos. Com avanços constantes em inteligência artificial, robótica e Internet das Coisas, a tecnologia da inovação está moldando um futuro promissor, repleto de oportunidades e soluções criativas para os desafios da sociedade. Seu impacto revolucionário está ampliando horizontes e acelerando a evolução da humanidade.</Text>
      <Text style={styles.cadastro}>Cadastre-se</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome"
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="grey"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Data de Nascimento"
          placeholderTextColor="grey"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="CPF"
          placeholderTextColor="grey"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity href='sobre' style={styles.loginBtn}>
        <Text style={styles.loginText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity href='home' style={styles.loginBtn}>
        <Text style={styles.loginText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374140',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    marginVertical: -200,
  },
  logoImage: {
    width: 300,
    height:200,
    marginBottom: 10,
    marginVertical: 170,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#FFFFFF',
    marginBottom: -80,
    marginTop: 0,
  },
  logo2: {
    fontSize: 20,
    color: '#FFFFFF',
    marginVertical: 20,
    textAlign: 'center',
    marginTop: 80,
  },
  cadastro: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#FFFFFF',
    margin: 20,
  },
  inputView: {
    width: '40%',
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    height: 50,
    marginBottom: 11,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '40%',
    backgroundColor: '#DC3522',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
  },
  acessoTexto: {
    color: '#03001C',
    marginTop: 60,
    marginBottom: -10,
  },
});
