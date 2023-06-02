import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-sphare.png')} style={styles.logoImage} />
      <Text style={styles.logo}>Sphare</Text>
      <Text style={styles.logo2}>A tecnologia da inovação impulsiona o progresso humano, abrindo novas possibilidades e transformando a maneira como vivemos, trabalhamos e nos relacionamos. Com avanços constantes em inteligência artificial, robótica e Internet das Coisas, a tecnologia da inovação está moldando um futuro promissor, repleto de oportunidades e soluções criativas para os desafios da sociedade. Seu impacto revolucionário está ampliando horizontes e acelerando a evolução da humanidade.</Text>
      <TouchableOpacity href='home' style={styles.loginBtn}>
        <Text style={styles.loginText}>home</Text>
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
    borderRadius: 8,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#FFFFFF',
    marginBottom: -5,
  },
  logo2: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputView: {
    width: '40%',
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    height: 50,
    marginBottom: 10,
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
  logoImage: {
    width: 400,
    height:300,
    marginTop: -50,
  }
});
